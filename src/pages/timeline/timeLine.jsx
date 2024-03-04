import React, { useState, useRef } from "react";
import "./timeLine.css"
import useSound from "use-sound";

export const Button = ({ beforeImage, afterImage, direction, text }) => {
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
    >
      <img
        src={isClicked ? afterImage : beforeImage}
        alt="Button"
        className="display-image"
      />
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
              <Button></Button>

            </div>
            <div className="chinese"></div>
        </div>
    )
}
