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

    /**------------------------------------------------
     * 페이지 로드 시 한 번 실행되는 useEffect
     *
     * 페이지가 로드될 때 한 번 실행되며, 전체 페이지의 자식 요소 수를 계산하여 totalPageNumber 상태에 설정합니다. 
     * 또한 윈도우의 리사이즈 이벤트를 처리하는 함수를 등록합니다.
     ------------------------------------------------*/
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

    /**------------------------------------------------
     * 스크롤 이벤트를 일정 시간 내 재호출 제한
     *
     * 스크롤 이벤트 시 맨 아래 페이지로 내려가는 것을 방지
     ------------------------------------------------*/
    function throttle(fn, wait) {
        let time = Date.now();
        return function (...args) {
            if (time + wait - Date.now() < 0) {
                fn(...args);
                time = Date.now();
            }
        };
    }

    /**------------------------------------------------
     * 스크롤 이벤트를 처리하는 함수
     *
     * 스크롤 이벤트를 처리하여 현재 스크롤 위치에 따라 현재 페이지를 업데이트합니다.
     ------------------------------------------------*/
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

    /**------------------------------------------------
     * 스크롤 이벤트 등록 및 해제
     *
     * 스크롤 및 리사이징 이벤트에 대한 리스너를 등록하고, 컴포넌트가 언마운트될 때 이벤트 리스너를 해제합니다.
     ------------------------------------------------*/
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentInputs, totalPageNumber]);

    /**------------------------------------------------
     * 마우스 휠 이벤트를 처리하는 함수
     *
     * 마우스 휠 이벤트를 처리하여 페이지를 위아래로 스크롤하도록 합니다.
     ------------------------------------------------*/
    const handleWheel = throttle((e) => {
        if (e.deltaY > 0) {
            let nextPage = currentInputs.currentPage + 1;
            if (nextPage <= totalPageNumber) {
                setCurrentInputs((prevState) => ({
                    ...prevState,
                    currentPage: nextPage,
                }));
                window.scrollTo({
                    top: currentInputs.currentWindowHeight * (nextPage - 1),
                    behavior: "smooth",
                });
            }
        } else if (e.deltaY < 0) {
            let prevPage = currentInputs.currentPage - 1;
            if (prevPage >= 1) {
                setCurrentInputs((prevState) => ({
                    ...prevState,
                    currentPage: prevPage,
                }));
                window.scrollTo({
                    top: currentInputs.currentWindowHeight * (prevPage - 1),
                    behavior: "smooth",
                });
            }
        }
    }, 100); // 100ms 동안 한 번만 호출되도록 설정

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
