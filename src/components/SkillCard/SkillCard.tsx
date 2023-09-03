import {FC} from 'react'
import './SkillCard.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface SkillCardProps {
    skillName:string;
    skillIcon:string
}

const SkillCard: FC<SkillCardProps> =({skillName , skillIcon})=>{
    return(
        <div className='skill'>
            <Card sx={{ display:'flex', flexDirection:'row', justifyContent:'center', margin:'12px'}}>
                <button className='iconButton'>
                    <CardContent sx={{display:'flex', flexDirection:'column',alignItems:'center' }}>
                        <div className='skillIcon'>
                            <img src={skillIcon} alt="My Icon" />
                        </div>
                        <div className='skillTitle'>
                            <h2>{skillName}</h2>
                        </div>
                    </CardContent>
                </button>
            </Card>
        </div>
    )
}

export default SkillCard;