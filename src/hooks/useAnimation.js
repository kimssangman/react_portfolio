import { useEffect, useRef } from "react";

function useAnimation() {
    const elementRef = useRef(null);
    const threshold = 0.5;

    useEffect(() => {
        const element = elementRef.current;

        // Intersection Observer 생성
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 요소가 화면에 들어왔을 때 애니메이션 추가
                        element.classList.add("animate");
                    } else {
                        // 요소가 화면에서 나갔을 때 애니메이션 제거
                        element.classList.remove("animate");
                    }
                });
            },
            {
                threshold: threshold, // 요소가 일정 비율 이상 화면에 보일 때 감지
            }
        );

        // Intersection Observer를 요소에 등록
        if (element) {
            observer.observe(element);
        }

        // Clean up: 컴포넌트가 언마운트될 때 Observer 해제
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold]);

    return elementRef;
}

export default useAnimation;
