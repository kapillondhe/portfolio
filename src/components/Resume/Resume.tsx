import './Resume.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Resume =()=>{
    return(
        <div className='ResumeContainer'>
            <h1>Resume</h1>
            <div className='ResumeCard'>
                <Card sx={{display:'flex',flexDirection:'row', justifyContent:'center', width:'fit-content'}}>
                    <CardContent >
                        <a href='./Resume/Kapil_Resume.pdf' download='KapilLondhe_resume.pdf' title='Download Resume'> 
                            <img className='ResumeIcon' src='./utilIcons/resume.svg'></img>
                        </a>
                    </CardContent>   
                </Card> 
            </div>   
        </div>
    )
}

export default Resume;