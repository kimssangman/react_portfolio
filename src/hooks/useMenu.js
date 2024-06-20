import { useEffect, useState } from "react";

// hook
function useMenu() {
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

    return {
        isMobile,
        menuOpen,
        handleMenuToggle,
    };
}

export default useMenu;
