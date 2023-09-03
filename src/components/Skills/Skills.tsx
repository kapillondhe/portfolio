import './Skills.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SkillCard from '../SkillCard/SkillCard';

const skillMap = new Map([
    ['html',
        {
            skillName:'HTML',
            skillIcon:'html5.svg'

        }
    ]
]);

const Skills =()=>{
    return(
        <div>
            <div className='skillTitle'>
            <h1>Skills</h1>
        </div>
        <div className="skillsContainer">
            
            <SkillCard skillName='JavaScript' skillIcon='/skillIcon/js.svg'/>
            <SkillCard skillName='TypeScript' skillIcon='/skillIcon/ts.svg'/>
            <SkillCard skillName='React' skillIcon='/skillIcon/react.svg'/>
            <SkillCard skillName='Node.js' skillIcon='/skillIcon/node.svg'/>
            <SkillCard skillName='Redux' skillIcon='/skillIcon/redux.svg'/>
            <SkillCard skillName='Jest' skillIcon='/skillIcon/jest.svg'/>
            <SkillCard skillName='HTML' skillIcon='/skillIcon/html5.svg'/>
            <SkillCard skillName='CSS' skillIcon='/skillIcon/css.svg'/>
            <SkillCard skillName='Webpack' skillIcon='/skillIcon/webpack.svg'/>
            <SkillCard skillName='Selenium' skillIcon='/skillIcon/selenium.svg'/>
        </div>
        </div>
        
    )
}

export default Skills;