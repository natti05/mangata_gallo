import '../assets/../css/Cards.css';
import picfour from '../images/pic4.jpg';
import pictwo from '../images/pic2.jpg';
import picthree from '../images/pic3.jpg';
function Card() {
  const photos = [{
    "image": picfour,
    "price": "11Euros",
    "id": 1
  },
  {
    "image": pictwo,
    "price": "16Euros",
    "id": 2
  },
  {
    "image": picthree,
    "price": "9Euros",
    "id": 3
  },]
  const single = photos.map((photo) =>(
    <div key={photo.id}>
      <img src={photo.image} alt={photo.price} id='pics'/>
      {/* <p className='price'>{photo.price}</p> */}
   </div> 
  ))
    return (
        <div className='box'>
          {single}
        </div>
    );

}

export default Card;