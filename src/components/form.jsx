import React from "react";
import { useState } from "react";

function Form (){
    
  const [headingText,setHeadingText] = useState("Hello");
  const [isMousedOver,setMousedOut] = useState(false);
  

  function handleClick(){
    setHeadingText("Submitted");

  };
 
  function handleMouseOut(){
   setMousedOut(false);
  };

  function handleMouseOver(){
    setMousedOut(true);
  }

    return(
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            <button  
                 style={{ backgroundColor: isMousedOver? "black": "white" }}
                  onMouseOut ={handleMouseOut} 
                  onMouseOver={handleMouseOver}
                  onClick = {handleClick}
                  >Submit</button>
        </div>
    )
   
};

export default Form;
 