import pichead from '../images/pichead.jpg';
import pic9 from '../images/pic9.jpg';
import pic11 from '../images/pic11.jpg';
import pic12 from '../images/pic12.jpg';
import pic13 from '../images/pic13.jpg';
import pic14 from '../images/pic14.jpg';
import pic15 from '../images/pic15.jpg';
import Card from '../components/Cards';
import Flickity from 'react-flickity-component';
import '../assets/../css/Flickity.css';


const flickityOptions = {
    initialIndex: 4,
    autoPlay: 1500,
    wrapAround: true,
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
      <img src={pic9} alt=''style={{ marginLeft: 5, marginRight: 5, height: 400 }}/>
      <img src={pic11} alt=''style={{ marginLeft: 5, marginRight: 5, height: 400 }}/>
      <img src={pic12} alt=''style={{ marginLeft: 5, marginRight: 5, height: 400 }}/>
      <img src={pic13} alt=''style={{ marginLeft: 5, marginRight: 5, height: 400 }}/>
      <img src={pic14} alt=''style={{ marginLeft: 5, marginRight: 5, height: 400 }}/>
      <img src={pic15} alt=''style={{ marginLeft: 5, marginRight: 5, height: 400 }}/>
    </Flickity>
  )
};

function Homepage() {
    return (
        <div>
            <div className='picsix' >
                <img src={pichead} className="" alt="" />
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