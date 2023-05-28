import picfive from '../images/pic5.jpg';
import shop from '../images/store.jpg';
function About() {
    return (
        <div>
            <h1>About Us</h1>
            <div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <img src={picfive} alt='' className='aboutpic'></img>
            </div>
            <div>
                <p>Come to visit us</p>
                <img src={shop} alt='' className='aboutpic'></img>
            </div>
        </div>
    );

}

export default About;