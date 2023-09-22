import About from "../About/About";
import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import Resume from "../Resume/Resume";
import Experience from "../Experience/Experience";

const Body =()=>{
    return(
        <div className="bodyContainer">
            <Intro/>
            <About/>
            <Skills/>
            <Experience/>
            <Education/>
            <Projects/>
            <Resume/>
        </div>

    )
}

export default Body;