import './Education.css'
import TimelineCard from '../TimelineCard/TimelineCard';

const EducationDetails = [
    {   
        title:'B.Tech (Electronics & Telecommunication)',
        date: ' 2017 - 2021',
        place:'Nanded, Maharashtra, India',
        secondTitle:'Shri Guru Gobind Singhji Institute of Engineering & Technology',
    },
    {   
        title:'HSC',
        date: '2017',
        place:'Gadchiroli, Maharashtra, India',
        secondTitle:'Shivaji Jr. Science college',
    },
    {   
        title:'SSC',
        date: '2015',
        place:'Gadchiroli, Maharashtra, India',
        secondTitle:'Platinum Jubilee High School',
    },
]

const Education :React.FC=()=>{
    return(
        <div className="timelineContainer">
            <h1>Education</h1>
            {
                EducationDetails.map((event)=>{
                    return(<>
                    <TimelineCard event={event}/>
                    </>)
                })
            }
        </div>
    )
}

export default Education;