import React from "react";
import {useState} from "react"; 
import {validateEmail} from "../components/EmailValidation"; 
 

function Form () {
    const [name, setName] = React.useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = React.useState("");
    

    const clearForm = () => { 
        setName(""); 
        setComment(""); 
        setEmail(""); 
      }; 

      const getIsFormValid = () => { 
        return ( 
          name && 
          validateEmail(email)
        ); 
      };  
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thank you for submit")
        clearForm();
    }
    return (
      <div className="form">
        <form className="" onSubmit={handleSubmit}>
          <h1>Any question? Send us a message</h1>
          <fieldset>
            <div>
              <label>Name:</label>
              <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="Field"> 
              <label> 
                Email address <sup>*</sup> 
              </label> 
              <input value={email} onChange={(e) => { setEmail(e.target.value); }} placeholder="Email address"/> 
            </div>
            <div>
              <label>Comment:</label>
              <textarea type="text" placeholder="Leave your comment..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
            <button type="submit" disabled={!getIsFormValid()}>Submit</button>
          </fieldset>
        </form>
      </div>
    )
   
};

  export default Form;