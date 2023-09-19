import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectDetails = [
    {   
        title:'American Sign Language Recognition',
        desscription: 'Designed a  solution with a 98.23% accuracy rate for recognizing sign language alphabets, effectively breaking down communication barriers for individuals who lack sign language proficiency or interpreter availability.The project encompasses the real-time implementation of an automatic sign language gesture recognition system, powered by Convolutional Neural Networks.',
        githubLink: 'https://github.com/kapillondhe/American-sign-language-recognition',
        youtubeLink:'https://www.youtube.com/watch?v=M8GeFaekfMY'
    },
    {   
        title:'Power consumption monitoring system',
        desscription: 'A complete software and hardware-based solution is provided to industry for real time power monitoring.A web application is created to monitor voltage, current,power and power factor of each machine within the industry',
        githubLink:'',
        youtubeLink:''
    }
]
const Projects: React.FC =()=>{
    return(
        <div className='projectsContainer'>
            <h1>Projects</h1>
            {
                ProjectDetails.map((project)=>{
                    return(<ProjectCard project={project}/>)
                })
            }
        </div>
    )
}

export default Projects