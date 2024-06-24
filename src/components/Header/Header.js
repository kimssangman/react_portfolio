import { useEffect, useState, useRef } from "react";
import eventBus from "../../eventBus/eventBus";
import useMenu from "../../hooks/useMenu";
import "./Header.css";

function Header({ scrollToRef }) {
    // header event state
    const [currentSection, setCurrentSection] = useState("Home");

    // 메뉴 hook
    const { isMobile, menuOpen, handleMenuToggle } = useMenu();

    /**--------------------------------------------
     * 헤더 메뉴를 누르면 해당 위치로 이동
     * 
     * 3. 전달받은 scrollToRef 객체를 scrollIntoView를 통해 해당 섹션으로 스크롤
     --------------------------------------------*/
    const handleClick = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
            handleMenuToggle(); // 메뉴를 토글해서 모바일 화면에서는 메뉴를 닫습니다.
        }
    };

    /**--------------------------------------------
     * eventBus로 현재 보고 있는 section에 따른 헤더 색상 변경
     --------------------------------------------*/
    useEffect(() => {
        const handleMyEvent = async (message) => {
            console.log(message);
            if (message === "About Me") {
                message = "About";
            }
            setCurrentSection(message);
        };

        // 이벤트 수신하기
        eventBus.on("currentView", handleMyEvent);
        return () => {
            // 컴포넌트가 사라질 때에는 이벤트 수신 종료
            eventBus.off("currentView", handleMyEvent);
        };
    }, []);

    return (
        <div className="header_container">
            <div className="header_wrap">
                {isMobile ? (
                    <div
                        className={`hamburger_menu ${menuOpen ? "open" : ""}`}
                        onClick={handleMenuToggle}
                    >
                        {menuOpen ? "✖" : "☰"}
                    </div>
                ) : (
                    <ul className="header_text">
                        <li
                            className={`header_li ${
                                currentSection === "Home" ? "active" : ""
                            }`}
                            onClick={() => handleClick(scrollToRef?.introRef)}
                        >
                            Home
                        </li>
                        <li
                            className={`header_li ${
                                currentSection === "About" ? "active" : ""
                            }`}
                            onClick={() => handleClick(scrollToRef?.aboutRef)}
                        >
                            About
                        </li>
                        <li
                            className={`header_li ${
                                currentSection === "Skills" ? "active" : ""
                            }`}
                            onClick={() => handleClick(scrollToRef?.skillsRef)}
                        >
                            Skills
                        </li>
                        <li
                            className={`header_li ${
                                currentSection === "Projects" ? "active" : ""
                            }`}
                            onClick={() => handleClick(scrollToRef?.projectRef)}
                        >
                            Projects
                        </li>
                        <li
                            className={`header_li ${
                                currentSection === "Contact" ? "active" : ""
                            }`}
                            onClick={() => handleClick(scrollToRef?.contactRef)}
                        >
                            Contact
                        </li>
                    </ul>
                )}

                {isMobile && menuOpen && (
                    <ul className="header_text_mobile">
                        <li
                            className={`header_li ${
                                currentSection === "Home" ? "active" : ""
                            }`}
                            onClick={() => handleClick(scrollToRef?.introRef)}
                        >
                            Home
                        </li>
                        <li
                            className={`header_li ${
                                currentSection === "About" ? "active" : ""
                            }`}
                            onClick={() => handleClick(scrollToRef?.aboutRef)}
                        >
                            About
                        </li>
                        <li
                            className={`header_li ${
                                currentSection === "Skills" ? "active" : ""
                            }`}
                            onClick={() => handleClick(scrollToRef?.skillsRef)}
                        >
                            Skills
                        </li>
                        <li
                            className={`header_li ${
                                currentSection === "Projects" ? "active" : ""
                            }`}
                            onClick={() => handleClick(scrollToRef?.projectRef)}
                        >
                            Projects
                        </li>
                        <li
                            className={`header_li ${
                                currentSection === "Contact" ? "active" : ""
                            }`}
                            onClick={() => handleClick(scrollToRef?.contactRef)}
                        >
                            Contact
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Header;
