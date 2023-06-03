import logo from '../assets/../images/m.g2.png';
import '../assets/../css/FooterNav.css';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import Card from '../components/Cards';
import { Routes, Route, Link } from "react-router-dom";

function BestSellers() {

  return <div><Card/></div>;
}

function Earrings() {

  return <div><Card/></div>;
}
function Bracelets() {

  return <div><Card/></div>;
}
function Necklaces() {

  return <div><Card/></div>;
}
function Rings() {

  return <div><Card/></div>;
}

function Nav() {
  return (
  <section>
    <header>
      <Link to="/">
      <div className='logo' >
         <img src={logo} className="head-logo" alt="logo" />
      </div>
      </Link>
      <nav>
        <Link to="/bestSellers" className="nav-item">BestSellers</Link>
        <Link to="/earrings" className="nav-item">Earrings</Link>
        <Link to="/bracelets" className="nav-item">Bracelets</Link>
        <Link to="/necklaces" className="nav-item">Necklaces</Link>
        <Link to="/rings" className="nav-item">Rings</Link>
        <Link to="/about" className="nav-item">About us</Link>
        <Link to="/contact" className="nav-item">Contact </Link>
      </nav>
    </header>
      <Routes> 
        <Route path="/bestSellers" element={<BestSellers />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/bracelets" element={<Bracelets/>} />
        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
  </section>
    
  );
}

export default Nav;