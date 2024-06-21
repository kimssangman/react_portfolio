import "./Skills.css";
import useAnimation from "../../hooks/useAnimation";

function Skills() {
    const headingRef = useAnimation();

    const skills = [
        { name: "HTML", iconClass: "skill_icon html" },
        { name: "CSS", iconClass: "skill_icon css" },
        { name: "Sass", iconClass: "skill_icon sass" },
        { name: "JavaScript", iconClass: "skill_icon javascript" },
        { name: "TypeScript", iconClass: "skill_icon typescript" },
        { name: "React", iconClass: "skill_icon react" },
        { name: "Next.js", iconClass: "skill_icon nextjs" },
        { name: "Angular2", iconClass: "skill_icon angular" },
        { name: "Recoil", iconClass: "skill_icon recoil" },
        { name: "Redux Toolkit", iconClass: "skill_icon redux" },
        { name: "Rxjs", iconClass: "skill_icon rxjs" },
        { name: "Node.js", iconClass: "skill_icon nodejs" },
        { name: "Mongodb", iconClass: "skill_icon mongodb" },
        { name: "Git", iconClass: "skill_icon git" },
        { name: "Github", iconClass: "skill_icon github" },
        { name: "Ec2", iconClass: "skill_icon ec2" },
    ];

    return (
        <div className="skills_container">
            <div className="skills_title">
                <h1 className="heading" ref={headingRef}>
                    Skills
                    <span className="skills_highlight"></span>
                </h1>
            </div>
            <div className="skills_content">
                <div className="skills_content_wrap">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill">
                            <div className={skill.iconClass}></div>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
