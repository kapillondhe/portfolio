import './Contacts.css'
import Tooltip from '@mui/material/Tooltip';

const linkedIn_URL='https://www.linkedin.com/in/kapillondhe/';
const github_URL='https://github.com/kapillondhe';


const Contacts: React.FC =()=>{
    return(
        <div className='contactsContainer'>
                <div className='contacts'>
                    <Tooltip title="GitHub Profile" sx={{}}>
                        <a href={github_URL} target='_blank'  rel="noreferrer" >
                        <img className='ContactIcon' src='./skillIcon/github.svg' alt='GitHub'></img>
                        </a>
                    </Tooltip>
                </div>
                <div className='contacts'>
                    <Tooltip title="Linkedin Profile">
                        <a href={linkedIn_URL} target='_blank'  rel="noreferrer" >
                        <img className='ContactIcon' src='./utilIcons/linkedin.svg' alt='Linkedin'></img>
                        </a>
                    </Tooltip>
                </div>
                <div className='contacts'>
                    <Tooltip title="Send Email">
                        <a href="mailto:kapillondhe25@gmail.com">
                            <img className='ContactIcon' src='./utilIcons/mail.svg' alt='Email'></img>
                        </a>
                    </Tooltip>
                </div>
        </div>
    )
}

export default Contacts;