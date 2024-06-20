import useAnimation from "../../hooks/useAnimation";
import useMenu from "../../hooks/useMenu";
import "./Header.css";

function Header({ scrollToRef }) {
    // menu hook
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
                            className="header_li"
                            onClick={() => handleClick(scrollToRef.introRef)}
                        >
                            Home
                        </li>
                        <li
                            className="header_li"
                            onClick={() => handleClick(scrollToRef.aboutRef)}
                        >
                            About
                        </li>
                        <li
                            className="header_li"
                            onClick={() => handleClick(scrollToRef.skillsRef)}
                        >
                            Skills
                        </li>
                        <li
                            className="header_li"
                            onClick={() => handleClick(scrollToRef.projectRef)}
                        >
                            Project
                        </li>
                        <li
                            className="header_li"
                            onClick={() => handleClick(scrollToRef.contactRef)}
                        >
                            Contact
                        </li>
                    </ul>
                )}

                {isMobile && menuOpen && (
                    <ul className="header_text_mobile">
                        <li
                            className="header_li"
                            onClick={() => handleClick(scrollToRef.introRef)}
                        >
                            Home
                        </li>
                        <li
                            className="header_li"
                            onClick={() => handleClick(scrollToRef.aboutRef)}
                        >
                            About
                        </li>
                        <li
                            className="header_li"
                            onClick={() => handleClick(scrollToRef.skillsRef)}
                        >
                            Skills
                        </li>
                        <li
                            className="header_li"
                            onClick={() => handleClick(scrollToRef.projectRef)}
                        >
                            Project
                        </li>
                        <li
                            className="header_li"
                            onClick={() => handleClick(scrollToRef.contactRef)}
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
