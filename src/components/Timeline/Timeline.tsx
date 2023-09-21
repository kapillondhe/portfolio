import './Timeline.css'
import TimelineCard from '../TimelineCard/TimelineCard';

const TimelineDetails = [
    {   
        title:'Birth',
        date: '25 Nov 1999',
        place:'Gadchiroli, Maharashtra, India',
    },
    {   
        title:'SSC',
        date: '2015',
        place:'Gadchiroli, Maharashtra, India',
        secondTitle:'Platinum Jubilee High School',
    },
    {   
        title:'HSC',
        date: '2017',
        place:'Gadchiroli, Maharashtra, India',
        secondTitle:'Shivaji Jr. Science college',
    },
    {   
        title:'B.Tech (Electronics & Telecommunication)',
        date: ' 2017 - 2021',
        place:'Nanded, Maharashtra, India',
        secondTitle:'Shri Guru Gobind Singhji Institute of Engineering & Technology',
    },
    {   
        title:'Software Engineer',
        date: 'Sept 2021 - Present',
        place:'Pune, Maharashtra, India',
        secondTitle:'HCL Technologies Ltd.',
        description:'Working as a contract employee at Siemens Digital Industries Software, Pune.*'+
                    'Contributing actively to the development of Teamcenter Active Workspace as a member of the Parameters Management team within Teamcenter Model Based System Engineering (MBSE). Active Workspace is a web-based, IT-friendly client for Teamcenter, offering a seamless experience on any device.*'+
                    'Proficient in frontend development, creating responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.*'+
                    'Engaged in the entire software development lifecycle, from gathering requirements and designing to testing, deploying, and maintaining applications.*'+
                    'Developed and maintained Selenium step definitions for automation testing, ensuring efficient test execution and accurate results.*'+
                    'Implemented effective strategies to resolve syslog errors in the backend, leading to a significant reduction in error count from around 1600 to 0.*'+
                    'Resolved Coverity issues in both the frontend and backend code, enhancing code quality and security.*'+
                    'Adopted test-driven development methodologies using Jest for frontend and C++ xUnit for backend code, ensuring robust and reliable software.*'+
                    'Collaborated closely with cross-functional teams, including designers, product managers, and quality assurance, to ensure seamless integration and delivery of high-quality software product.*'+
                    'Domain: Product Lifecycle Management.*'+
                    'Skills: JavaScript · React.js · Node.js · Webpack · Babel.js · Web Applications · Front-End Development · C++ · Jest · Agile Methodologies'
    },
]

const Timeline :React.FC=()=>{
    return(
        <div className="timelineContainer">
            <h1>Timeline</h1>
            {
                TimelineDetails.map((event)=>{
                    return(<>
                    <TimelineCard event={event}/>
                    </>)
                })
            }
        </div>
    )
}

export default Timeline;