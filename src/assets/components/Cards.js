import '../assets/../css/Cards.css';
import pic9 from '../images/pic9.jpg';
import pic11 from '../images/pic11.jpg';
import pic12 from '../images/pic12.jpg';
import pic13 from '../images/pic13.jpg';
import pic14 from '../images/pic14.jpg';
import pic15 from '../images/pic15.jpg';

function Card() {
  const photos = [{
    "image": pic9,
    "price": "9Euros",
    "name": "earring",
    "id": 7
  },
  {
    "image": pic11,
    "price": "9Euros",
    "name": "earring",
    "id": 8
  },
  {
    "image": pic12,
    "price": "9Euros",
    "name": "ring",
    "id": 9
  },{
    "image": pic13,
    "price": "9Euros",
    "name": "ring",
    "id": 10
  },{
    "image": pic14,
    "price": "9Euros",
    "name": "necklace",
    "id": 11
  },
  {
    "image": pic15,
    "price": "9Euros",
    "name": "ring",
    "id": 12
  },]
  
  // const filtered = photos.filter(photo => {
  //   return photo.name === "earring";
  // });
  //   <div>
  //     {filtered.map(photo => {
  //       return (
  //         <div key={photo.id}>
  //           <h2>name: {photo.name}</h2>
  //           <img src={photo.image} alt={photo.price} id='pics' style={{width: 300, height: 300}}/>
  //         </div>
  //       );
  //     })}
  //   </div>

  const single = photos.map((photo) =>(
    <div key={photo.id}>
      <img src={photo.image} alt={photo.price} id='pics' style={{width: 300, height: 300}}/>
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