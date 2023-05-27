import pic6 from '../images/pic6.jpg';
import Card from '../components/Cards';

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
            <Card />
        </div>
    );

}

export default Homepage;