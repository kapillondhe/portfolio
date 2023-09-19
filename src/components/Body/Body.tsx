import ExperienceTimeline from "../Timeline/Timeline";
import About from "../About/About";
import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

const Body =()=>{
    return(
        <div className="bodyContainer">
            <Intro/>
            <About/>
            <ExperienceTimeline/>
            <Skills/>
            <Projects/>
        </div>

    )
}

export default Body;