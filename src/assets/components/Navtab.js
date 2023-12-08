import React,{useState,useEffect} from 'react';

export function BestSellers() {
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
export function Earrings() {
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
export function Bracelets() {
        
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
export function Necklaces() {
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
export function Rings() {
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