import React from "react";

import "./About.css";
import profile from "../../assets/images/면접사진.jpg";
import useAnimation from "../../hooks/useAnimation";

function About() {
    const headingRef = useAnimation();

    return (
        <div className="about_container">
            <div className="about_title">
                <h1 className="heading" ref={headingRef}>
                    About Me
                    <span className="about_highlight"></span>
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
                        2년 차 웹 개발자로 React와 Next.js, Angular2, AWS,
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
