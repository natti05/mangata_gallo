import picfour from '../images/pic4.jpg'
import pictwo from '../images/pic2.jpg'
import picthree from '../images/pic3.jpg'
import '../assets/../css/Cards.css';


function Card() {
    return (
        <div>
          <img src={picfour} className="pics" alt=''></img>  
          <img src={picthree} className="pics" alt=''></img> 
          <img src={pictwo} className="pics" alt=''></img> 

        </div>
    );

}

export default Card;