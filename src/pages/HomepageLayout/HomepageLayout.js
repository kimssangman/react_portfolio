import About from "../../components/About/About";
import Intro from "../../components/Intro/Intro";
import "./HomepageLayout.css";
import useScrollNavigation from "../../hooks/useScrollNavigation";
import Skills from "../../components/Skills/Skills";

function HompageLayout() {
    const { wholePageRef } = useScrollNavigation();

    return (
        <div className="slider" ref={wholePageRef}>
            <Intro />
            <About />
            <Skills />
        </div>
    );
}

export default HompageLayout;
