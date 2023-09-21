import './TimelineCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


interface TimelineCardProps {
    event :{
        title: string; 
        date: string;
        place: string;
        secondTitle?: string;
        description?:string;
        
    }
  }

const TimelineCard: React.FC<TimelineCardProps> = ({event})=>{
    return(
        <div className='TimelineContainer'>
            <Card sx={{ display:'flex', flexDirection:'column', justifyContent:'center',padding:'20px', margin:'24px'}}>
                <CardContent sx={{display:'flex', flexDirection:'row',flexGrow:'1', padding:'0px', margin:'0px', alignItems: 'center', height:'max-content' }}>
                    <div className='eventTitle'>
                        <h3>{event.title}</h3>
                            <CardContent sx={{display:'flex', flexDirection:'row',padding:'0px', margin:'0px', alignItems: 'center' }}>
                                {
                                    event.secondTitle ? (
                                            <h4 className='eventSecondTitle'>{event.secondTitle}</h4>                   
                                    ):(<></>)
                                }
                            </CardContent>
                    </div>
                    <div>
                    <CardContent sx={{display:'flex', flexDirection:'column',flexGrow:'0', padding:'0px',margin:'0px',justifyContent:'start',height:'fit-content'}}>
                            <div className='eventDate'>
                                <img src='./utilIcons/date.svg' className='eventIcon'></img>
                                <p className='eventDate'>{event.date}</p>
                            </div>
                            <div className='eventDate'>
                                <img src='./utilIcons/location.svg' className='eventIcon'></img>
                                <p className='eventDate'>{event.place}</p>
                            </div>
                        </CardContent>
                    </div>
                </CardContent>
                {
                    event.description ? (
                        <CardContent sx={{display:'flex', flexDirection:'column',alignItems:'flex-start', textAlign:'start'}}>
                            <p>{event.description.split('*').map((point)=>{
                                return <p>{'• '+ point}</p>
                            })}</p>
                        </CardContent>
                    ):
                    (<></>)
                }
            </Card>
        </div>
    )
}


export default TimelineCard;