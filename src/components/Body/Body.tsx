import ExperienceTimeline from "../Timeline/Timeline";
import Contacts from "../Contacts/Contact";
import Typography from '@mui/material/Typography';
const Body =()=>{
    return(
        <div className="bodyContainer">
            <div className="typewriter">
                <Typography variant="h5">Hello !!</Typography>
                <Typography variant="h5">I am Kapil</Typography>
                <Typography variant="h5">.</Typography>
                <Typography variant="h5">.</Typography>
                <Typography variant="h5">.</Typography>
                <Typography variant="h5">Website WIP</Typography>
            </div>
            <Contacts/>
            <ExperienceTimeline/>
        </div>

    )
}

export default Body;