import "./Intro.css";
import { SlMouse } from "react-icons/sl";

function Intro() {
    return (
        <div className="intro_container">
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
