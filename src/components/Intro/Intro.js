import useAnimation from "../../hooks/useAnimation";
import "./Intro.css";
import { SlMouse } from "react-icons/sl";

function Intro() {
    const headingRef = useAnimation();

    return (
        <div className="intro_container">
            <div className="intro_title">
                <h1 className="heading" ref={headingRef}>
                    Home
                    <span className="intro_highlight"></span>
                </h1>
            </div>

            <span className="typing_effect">
                Front-End 개발자 김상민의 포트폴리오입니다.
            </span>

            <div className="icon">
                <SlMouse />
                <p className="icon_text">Scroll</p>
            </div>
        </div>
    );
}

export default Intro;
