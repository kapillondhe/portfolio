import './Intro.css'
import Contacts from "../Contacts/Contact";
const Intro = ()=>{
    return(
        <div className='introContainer'>
            <h1>
            <span className='hello'>Hello </span>
            <span className="waving-emoji">👋</span>
            </h1>
            <div className='name'>
                <h1>I am Kapil</h1>
            </div>
            <Contacts/>
        </div>
    )
}

export default Intro;