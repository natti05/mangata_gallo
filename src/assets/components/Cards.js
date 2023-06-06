import pic0 from '../images/pic0.jpg';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic8 from '../images/pic8.jpg';
import pic16 from '../images/pic16.jpg';


function Card() {
  const photos = [{
    "image": pic0,
    "price": "€9.75",
    "name": "3 peace golden necklace",
    "type": "collection",
    "id":"necklace"
    },{
    "image": pic1,
    "price": "€12.99",
    "name": "Cute dog earring",
    "type": "collection",
    "id": "earring"
  },
  {
    "image": pic2,
    "price": "€16.80",
    "name": "Long golden earring",
    "type": "collection",
    "id": "earring"
  },
  {
    "image": pic3,
    "price": "€30.60",
    "name": "5 peace ring",
    "type": "collection",
    "id": "ring"
  },
  {
    "image": pic4,
    "price": "€19.80",
    "name": "Silver earring",
    "type": "collection",
    "id": "earring"
  },
  {
    "image": pic8,
    "price": "€14.00",
    "name": "Silver bluish green bracelet",
    "type": "collection",
    "id": "bracelet"
  },
  {
    "image": pic16,
    "price": "€9.00",
    "name": "Medium sized earring",
    "type": "collection",
    "id": "earring"
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
      <img src={photo.image} alt="" id='pics'/>
      <p>{photo.name}</p>
      <b>{photo.price}</b>
   </div> 
  ))
    return (
        <div className='box'>
          {single}
        </div>
    );

}

export default Card;