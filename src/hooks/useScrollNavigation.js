import { useEffect, useRef, useState } from "react";

function useScrollNavigation() {
    // 전체 페이지 요소를 참조하기 위한 useRef
    const wholePageRef = useRef(null);
    // 전체 페이지의 총 수를 저장하는 상태
    const [totalPageNumber, setTotalPageNumber] = useState(0);
    // 현재 윈도우 높이와 현재 페이지를 관리하는 상태
    const [currentInputs, setCurrentInputs] = useState({
        currentWindowHeight: window.innerHeight,
        currentPage: 0,
    });

    // 페이지 로드 시 한 번 실행되는 useEffect
    useEffect(() => {
        const wholePageElement = wholePageRef.current;
        // 전체 페이지의 자식 요소 수를 계산하여 설정
        const totalNumberOfChildren = wholePageElement?.children?.length || 0;
        setTotalPageNumber(totalNumberOfChildren);

        // 윈도우 리사이즈 이벤트 리스너 등록
        const handleResize = () => {
            setCurrentInputs((prevState) => ({
                ...prevState,
                currentWindowHeight: window.innerHeight,
            }));
        };

        window.addEventListener("resize", handleResize);

        // cleanup 함수
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // 스크롤 이벤트를 처리하는 함수
    const handleScroll = () => {
        for (let i = 1; i <= totalPageNumber; i++) {
            if (window.scrollY < currentInputs.currentWindowHeight * i) {
                setCurrentInputs((prevState) => ({
                    ...prevState,
                    currentPage: i,
                }));
                return;
            }
        }
    };

    // 스크롤 이벤트 등록 및 해제
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentInputs, totalPageNumber]);

    // 마우스 휠 이벤트를 처리하는 함수
    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            let nextPage = currentInputs.currentPage + 1;
            if (nextPage <= totalPageNumber) {
                window.scrollTo({
                    top: currentInputs.currentWindowHeight * nextPage,
                    behavior: "smooth",
                });
            }
        }
        if (e.deltaY < 0) {
            let prevPage = currentInputs.currentPage - 1;
            if (prevPage >= 1) {
                window.scrollTo({
                    top: currentInputs.currentWindowHeight * (prevPage - 1),
                    behavior: "smooth",
                });
            }
        }
    };

    // 마우스 휠 이벤트 등록
    useEffect(() => {
        window.addEventListener("wheel", handleWheel);
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [currentInputs, totalPageNumber]);

    // 반환할 값
    return { wholePageRef };
}

export default useScrollNavigation;
