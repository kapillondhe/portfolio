import './Contacts.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {handleGIT, handleLI, handleEmail} from './contactController'



const Contacts: React.FC =()=>{
    return(
        <div className='contactsContainer'>
            <div className='contacts'>
                <div className='github'>
                    <Tooltip title="GitHub Profile" sx={{}}>
                        <Button color='inherit' onClick={handleGIT} >
                            <GitHubIcon/>
                        </Button>
                    </Tooltip>
                </div>
                <div className='linkedin'>
                    <Tooltip title="Linkedin Profile">
                        <Button color='inherit' onClick={handleLI} >
                            <LinkedInIcon/>
                        </Button>
                    </Tooltip>
                </div>
                <div className='email'>
                    <Tooltip title="Send Email">
                        <Button color='inherit' onClick={handleEmail}>
                            <EmailIcon/>
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default Contacts;