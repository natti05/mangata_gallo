import logo from '../assets/../images/m.g2.png';
import '../assets/../css/FooterNav.css';
import Homepage from '../components/Homepage';
import About from '../components/About';
import Contact from '../components/Contact';
import Card from '../components/Cards';
import React,{useState,useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
  <section>
    <header>
      <Link to="/">
      <div className='logo' >
         <img src={logo} className="head-logo" alt="logo" />
      </div>
      </Link>
      <nav>
      <Link to="/collection" className="nav-item">Summer Collection</Link>
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

function BestSellers() {
    const [data,setData]=useState([]);
  const getData=()=>{
    fetch('../Photos.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  
  const filtered = data.filter(data => {
    return data.type === "bestseller";
  }); 

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="box">
     {
       data && data.length>0 && filtered.map((item)=>
       <div>
          <img src={`${item.url}`} alt="" id='pics'></img>
          <p className='nameprice'>{item.name}</p> 
          <b className='nameprice'>{item.price}</b>
       </div>)
     }
    </div>
  );
}
function Earrings() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('../Photos.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  
  const filtered = data.filter(data => {
    return data.id === "earring";
  }); 

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="box">
     {
       data && data.length>0 && filtered.map((item)=>
       <div>
          <img src={`${item.url}`} alt="" id='pics'></img>
          <p className='nameprice'>{item.name}</p> 
          <b className='nameprice'>{item.price}</b>
       </div>)
     }
    </div>
  );
}
function Bracelets() {

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('../Photos.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  
  const filtered = data.filter(data => {
    return data.id === "bracelet";
  }); 

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="box">
     {
       data && data.length>0 && filtered.map((item)=>
       <div>
          <img src={`${item.url}`} alt="" id='pics'></img>
          <p className='nameprice'>{item.name}</p> 
          <b className='nameprice'>{item.price}</b>
       </div>)
     }
    </div>
  );
}
function Necklaces() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('../Photos.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  
  const filtered = data.filter(data => {
    return data.id === "necklace";
  }); 

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="box">
     {
       data && data.length>0 && filtered.map((item)=>
       <div> 
          <img src={`${item.url}`} alt="" id='pics'></img>
          <p className='nameprice'>{item.name}</p> 
          <b className='nameprice'>{item.price}</b>
       </div>)
     }
    </div>
  );
}
function Rings() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('../Photos.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  
  const filtered = data.filter(data => {
    return data.id === "ring";
  }); 

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="box">
     {
       data && data.length>0 && filtered.map((item)=>
       <div>
          <img src={`${item.url}`} alt="" id='pics'></img>
          <p className='nameprice'>{item.name}</p> 
          <b className='nameprice'>{item.price}</b>
       </div>)
     }
    </div>
  );
}