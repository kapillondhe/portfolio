import ExperienceTimeline from "../Timeline/Timeline";
import About from "../About/About";
import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";

const Body =()=>{
    return(
        <div className="bodyContainer">
            <Intro/>
            <About/>
            <ExperienceTimeline/>
            <Skills/>
        </div>

    )
}

export default Body;