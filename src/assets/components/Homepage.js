import pic6 from '../images/pic6.jpg';
import pic4 from '../images/pic4.jpg';
import pic7 from '../images/pic7.jpg';
import pic8 from '../images/pic8.jpg';
import Card from '../components/Cards';
import Flickity from 'react-flickity-component';
import '../assets/../css/Flickity.css';


const flickityOptions = {
    initialIndex: 4
}

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src={pic4} alt=''style={{ marginLeft: 5, marginRight: 5, width: 700 }}/>
      <img src={pic7} alt=''style={{ marginLeft: 5, marginRight: 5, width: 700 }}/>
      <img src={pic8} alt=''style={{ marginLeft: 5, marginRight: 5, width: 700 }}/>
      <img src={pic4} alt=''style={{ marginLeft: 5, marginRight: 5, width: 700 }}/>
      <img src={pic7} alt=''style={{ marginLeft: 5, marginRight: 5, width: 700 }}/>
      <img src={pic8} alt=''style={{ marginLeft: 5, marginRight: 5, width: 700 }}/>
      <img src={pic4} alt=''style={{ marginLeft: 5, marginRight: 5, width: 700 }}/>
      <img src={pic7} alt=''style={{ marginLeft: 5, marginRight: 5, width: 700 }}/>
      <img src={pic8} alt=''style={{ marginLeft: 5, marginRight: 5, width: 700 }}/>
    </Flickity>
  )
};

function Homepage() {
    return (
        <div>
            <div className='picsix' >
                <img src={pic6} className="" alt="" />
                    <h1>Lorem ipsum dolor sit amet,<br/>
                        consectetur adipiscing elit, <br/>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </h1>
                    <p>Lorem ipsum</p>
            </div>
            <div style={{ paddingTop: 100 }}>
                <h2>Bestseller</h2>
                <Carousel />
            </div>
                <h2 style={{ paddingTop: 100 }}>Summer Collection</h2>
            <Card />
        </div>
    );

}

export default Homepage;