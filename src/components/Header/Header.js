import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 햄버거 메뉴 반응형
    const [menuOpen, setMenuOpen] = useState(false); // 햄버거 메뉴 오픈

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleMenuToggle() {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    }

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
                        <li className="header_li">Home</li>
                        <li className="header_li">About</li>
                        <li className="header_li">Skills</li>
                        <li className="header_li">Project</li>
                        <li className="header_li">Contact</li>
                    </ul>
                )}

                {isMobile && menuOpen && (
                    <ul className="header_text_mobile">
                        <li className="header_li_mobile">Home</li>
                        <li className="header_li_mobile">About</li>
                        <li className="header_li_mobile">Skills</li>
                        <li className="header_li_mobile">Project</li>
                        <li className="header_li_mobile">Contact</li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Header;
