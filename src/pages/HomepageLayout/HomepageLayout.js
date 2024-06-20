import About from "../../components/About/About";
import Intro from "../../components/Intro/Intro";
import "./HomepageLayout.css";
import useScrollNavigation from "../../hooks/useScrollNavigation";
import Skills from "../../components/Skills/Skills";
import Project from "../../components/Project/Project";
import React, { useEffect, useRef } from "react";

function HompageLayout({ scrollToRef }) {
    const { wholePageRef } = useScrollNavigation();

    /**--------------------------------------------
     * 헤더 메뉴를 누르면 해당 위치로 이동
     * 
     * 1. 각 섹션의 ref를 scrollToRef 객체에 할당
     --------------------------------------------*/
    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    // Assign refs to the objects passed from props
    useEffect(() => {
        // Assign refs to the objects passed from props
        scrollToRef.introRef = introRef;
        scrollToRef.aboutRef = aboutRef;
        scrollToRef.skillsRef = skillsRef;
        scrollToRef.projectRef = projectRef;
        scrollToRef.contactRef = contactRef;
    }, [scrollToRef]);

    return (
        <div className="slider" ref={wholePageRef}>
            <div ref={introRef}>
                <Intro />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={skillsRef}>
                <Skills />
            </div>
            <div ref={projectRef}>
                <Project />
            </div>
        </div>
    );
}

export default HompageLayout;
