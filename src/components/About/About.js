import { useEffect, useRef } from "react";
import "./About.css";
import profile from "../../assets/images/면접사진.jpg";

function About() {
    const headingRef = useRef(null);

    useEffect(() => {
        const headingElement = headingRef.current;

        // Intersection Observer 생성
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 요소가 화면에 들어왔을 때 애니메이션 추가
                        headingElement.classList.add("animate-heading");
                    } else {
                        // 요소가 화면에서 나갔을 때 애니메이션 제거 (옵션)
                        headingElement.classList.remove("animate-heading");
                    }
                });
            },
            {
                threshold: 0.5, // 요소가 반 이상 화면에 보일 때 감지
            }
        );

        // Intersection Observer를 heading 요소에 등록
        if (headingElement) {
            observer.observe(headingElement);
        }

        // Clean up: 컴포넌트가 언마운트될 때 Observer 해제
        return () => {
            if (headingElement) {
                observer.unobserve(headingElement);
            }
        };
    }, []);

    return (
        <div className="about_container">
            <div className="about_title">
                <h1 className="heading" ref={headingRef}>
                    About Me
                    <span className="highlight"></span>
                </h1>
            </div>
            <div className="about_content">
                <div className="about_content_wrap">
                    <img
                        src={profile}
                        alt="증명사진"
                        className="about_content_img"
                    />
                    <h1 className="about_content_title">Front-End Engineer</h1>
                </div>

                <section className="about_section">
                    <span>
                        2년 차 웹 개발자로 Next.js와 Angular2, React, AWS,
                        Github를 이용하여 프로젝트 설계, 배포, 운영까지 해온
                        경험을 가지고 있습니다.
                        <br />
                        <br />
                        <br />
                        사용자 경험을 최우선으로 생각하며 개발하고, 항상 더 높은
                        목표를 위해 꾸준히 노력하는 개발자 김상민입니다.
                        <br />
                        <br />
                        <br />
                        계속해서 완성도 높은 코드, 그리고 완성도 높은 UI를 위해
                        매일 고뇌하는 사람이 되도록 하겠습니다.
                        <br />
                        <br />
                        <br />
                        감사합니다.
                    </span>
                </section>
            </div>
        </div>
    );
}

export default About;
