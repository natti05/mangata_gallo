import main from '../images/pichead.jpg';
import pic9 from '../images/pic9.jpg';
import pic11 from '../images/pic11.jpg';
import pic12 from '../images/pic12.jpg';
import pic13 from '../images/pic13.jpg';
import pic14 from '../images/pic14.jpg';
import pic15 from '../images/pic15.jpg';
import picbody from '../images/picbody.jpg';
import Card from '../components/Cards';
import Flickity from 'react-flickity-component';
import { Link } from "react-router-dom";
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
        <div className='main' >
          <img src={main} className="" alt="" />
          <h1>Lorem ipsum dolor sit amet,<br/>
              consectetur adipiscing elit, <br/>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </h1>
            <p>Lorem ipsum</p>
        </div>
        <div className='bestsellerbox'>
          <h2>Bestseller</h2>
          <Carousel />
        </div>
        <div className='boxpage'>
          <div>
            <img src={picbody} alt="" id='picbody'></img>
          </div>
          <div>
            <p className='phrase'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <h2 style={{ paddingTop: 100 }}>Summer Collection</h2>
        <Card /> <Link to="/bestSellers" className="nav-item"><p>More:</p></Link>

      </div>
    );

}

export default Homepage;