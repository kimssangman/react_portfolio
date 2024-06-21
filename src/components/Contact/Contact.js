import "./Contact.css";
import useAnimation from "../../hooks/useAnimation";
import icon from "../../assets/images/github.png";
import ConfettiExplosion from "react-confetti-explosion";
import { useEffect, useState } from "react";

function Contact() {
    const headingRef = useAnimation();

    const [isExploding, setIsExploding] = useState(true);

    const triggerExplosion = () => {
        setIsExploding(true);
    };

    const handleExplosionComplete = () => {
        setIsExploding(false);
        // 일정 시간 후에 다시 폭죽을 반복
        setTimeout(triggerExplosion, 1000); // 1초 후에 다시 폭죽을 실행
    };

    return (
        <div className="contact_container">
            <div className="contact_title">
                <h1 className="heading" ref={headingRef}>
                    Contact
                    <span className="contact_highlight"></span>
                </h1>
            </div>
            <div className="contact_content">
                <div className="contact_content_wrap">
                    {isExploding && (
                        <ConfettiExplosion
                            force={0.4}
                            duration={2000}
                            particleCount={30}
                            width={400}
                            onComplete={handleExplosionComplete}
                        />
                    )}
                    <p className="contact_email">Email : ksm9606@naver.com</p>
                    <a href="https://github.com/kimssangman">
                        <img src={icon} alt="github" className="contact_icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
