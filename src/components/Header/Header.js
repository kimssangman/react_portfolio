import "./Header.css";
import useMenu from "../../hooks/menu_hook";

function Header() {
    // menu hook
    const { isMobile, menuOpen, handleMenuToggle } = useMenu();

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
