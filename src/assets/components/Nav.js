import logo from '../assets/../images/m.g2.png';
import '../assets/../css/FooterNav.css';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import { Routes, Route, Link } from "react-router-dom";

function Nav() {
  return (
  <section>
    <header>
      <div className='logo' >
         <img src={logo} className="head-logo" alt="logo" />
      </div>
      <nav>
        <Link to="/" className="nav-item">BestSellers</Link>
        <Link to="/about" className="nav-item">About us</Link>
        <Link to="/contact" className="nav-item">Contact </Link>
      </nav>
    </header>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
  </section>
    
  );
}

export default Nav;