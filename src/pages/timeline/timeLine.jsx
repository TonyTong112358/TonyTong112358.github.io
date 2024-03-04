import React, { useState, useRef } from "react";
import "./timeLine.css"
import before from "./images/crystal.jpg"
import after from "./images/edwardo.jpg"
export const ButtonDisplay = ({ beforeImage, afterImage, direction, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  

  const handleHover = () => {
    setIsHovered(true);
    
    
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={`display ${isHovered ? "hovered" : ""} ${
        isClicked ? "clicked" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
      onClick={handleClick}
      style={{
        backgroundImage: isHovered?`url(${afterImage})` :`url(${beforeImage})`,
        

      }}

    >
      {/* <img
        src={isClicked ? afterImage : beforeImage}
        alt="Button"
        className="display-image"
      /> */}
     
      {isClicked && (
        <>
          <span className={`arrow ${direction}`}></span>
          <Textbox text={text} direction={direction} />
        </>
      )}
      
    </button>
  );
};


const Textbox = ({ text, direction }) => {
    const [isHovered, setIsHovered] = useState(false);
    
  
    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleUnhover = () => {
      setIsHovered(false);
    };
  
    const handleClick = () => {
      
    };
  
    return (
      <div
        className={`textbox ${direction} ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        onClick={handleClick}
      >
        {text}
        
      </div>
    );
  };

export const TimeLine =() =>{
    return(
        <div id="timeLine" >
            <div className="american">
            <ButtonDisplay beforeImage={before} afterImage={after} direction={"right"} text={""}/>
              hfqwwohfqoh
             

            </div>
            <div className="chinese">
              <ButtonDisplay beforeImage={before} afterImage={after} direction={"right"} text={""}/>
            </div>
        </div>
    )
}
