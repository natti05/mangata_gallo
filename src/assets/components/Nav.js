import logo from '../assets/../logos/m.g4.png';
import '../assets/../css/Nav.css';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import { Routes, Route, Link } from "react-router-dom";

function Nav() {
  return (
  <section>
    <header>
      <img src={logo} className="Head-logo" alt="logo" />
    </header>
    <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About us</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
  </section>
    
  );
}

export default Nav;