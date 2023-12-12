import logo from '../assets/../images/m.g2.png';
import '../assets/../css/FooterNav.css';
import Homepage from '../components/Homepage';
import About from '../components/About';
import Contact from '../components/Contact';
import Card from '../components/Cards';
import {BestSellers, Earrings, Bracelets, Necklaces, Rings} from '../components/Navtab';
import React,{useState} from 'react';
import { ReactComponent as Hamburger } from '../../assets/images/hamburger.svg'
import { Routes, Route, NavLink } from "react-router-dom";
import { BestSellers} from '../components/Navtab';
import { Earrings} from '../components/Navtab';
import { Bracelets} from '../components/Navtab';
import { Necklaces} from '../components/Navtab';
import { Rings} from '../components/Navtab';

  const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
  <section>
    <header>
      <nav className="navbar">
        <div className="container">
        <NavLink to="/">
          <div className='logo' >
              <img src={logo} className="head-logo" alt="logo" />
          </div>
        </NavLink>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink class="active" to="/collection">Summer Collection</NavLink>
            </li>
            <li>
              <NavLink to="/bestSellers">BestSellers</NavLink>
            </li>
            <li>
              <NavLink to="/earrings">Earrings</NavLink>
            </li>
            <li>
              <NavLink to="/bracelets">Bracelets</NavLink>
            </li>
            <li>
              <NavLink to="/necklaces">Necklaces</NavLink>
            </li>
            <li>
              <NavLink to="/rings">Rings</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/collection" element={<Card />} />
        <Route path="/bestSellers" element={<BestSellers />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/bracelets" element={<Bracelets/>} />
        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
  </section>
  
  );
}
export default Nav;