import './ProjectCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface ProjectCardProps {
    project :{
        title: string; 
        desscription: string;
        githubLink:string;
        youtubeLink: string;
    }
  }

const ProjectCard: React.FC<ProjectCardProps> =({project})=>{
    return(
        <div className='projectContainer'>
            <Card sx={{ display:'flex', flexDirection:'column', justifyContent:'center', margin:'12px'}}>
                <CardContent sx={{display:'flex', flexDirection:'row', paddingLeft:'16px', alignItems: 'center' }}>
                    <h2>{project.title}</h2>
                        <CardContent sx={{display:'flex', flexDirection:'row',justifyContent:'center', alignItems: 'center' }}>
                            {
                                project.githubLink !=='' ? (
                                    <a href={project.githubLink} rel="noreferrer" target="_blank">
                                        <img className='projectIcon' src='/skillIcon/github.svg' alt="My Icon" />
                                    </a>
                                ):(<></>)
                            }
                                                        {
                                project.youtubeLink !=='' ? (
                                    <a href={project.youtubeLink} rel="noreferrer" target="_blank">
                                        <img className='projectIcon' src='/skillIcon/youtube.svg' alt="My Icon" />
                                    </a>
                                ):(<></>)
                            }
                        </CardContent>
                </CardContent>
                <CardContent sx={{display:'flex', flexDirection:'column',alignItems:'flex-start' }}>
                    <p>{project.desscription}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectCard;