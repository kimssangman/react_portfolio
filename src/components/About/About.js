import "./About.css";

function About() {
    return (
        <div className="about_container">
            <div className="about_title">
                <h1 className="heading">
                    About Me
                    <span className="highlight"></span>
                </h1>
            </div>
            <div className="about_content">
                <h1 className="about_content_title">Frontend Engineer</h1>
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
