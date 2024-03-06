import React, { useState, useRef } from "react";
import "./timeLine.css"

import after from "./images/sexyMan.jpg"
import bgImage from "./images/bgFlag.png"
import americhina from "./images/americhina.png"
import chineseNewYear from "./images/CNY.jpg"
import christmas from './images/christmas.jpg'
import chineseFood from "./images/chineseFood.jpg"
import americanFood from "./images/chrimasFood.jpg"
import eng from "./images/english.jpg"
import chinese from "./images/chinese.png"
import home from "./images/MyHouse.jpg"
import school from "./images/laRosa.jpg"
import whiteHouse from "./images/washington.jpg"
import beijing from "./images/beijing.jpg"
import trump from "./images/donald.jpg"
import winnieThePooh from "./images/xijingping.jpg"
export const ButtonDisplay = ({ beforeImage, afterImage, direction, text ,row, column}) => {
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
  
  const base = direction === "up" ? "upArrowBase" :"downArrowBase"
  const arrow = direction ==="up" ? "upArrowTip" :"downArrowTip"
  const classUse = direction ==="up" ? "upButtonText" :"downButtonText"
  
  return (
    <div className={classUse} style={{gridRow:row, gridColumn:column}}>
        <div
        
          className={`displays${isHovered ? " hovered" : ""} ${
            isClicked ? "clicked" : ""
          }`}
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
          onClick={handleClick}
          style={{
            backgroundImage: (isHovered || isClicked)?`url(${afterImage})` :`url(${beforeImage})`,
            
            gridRow:direction=== "down" ?'1':'4',
            gridColumn:'1',
          }}
        >
        </div>
        
        <div className= {base+(isClicked ?" arrow-active":"")}
          style = {{gridRow: (direction === "down" ?'2':'3'),
          gridColumn:'1'}}
          >

        </div>
        <div className={arrow+(isClicked ?" arrow-active" :"")}
          style={{gridRow:(direction==="down" ?'3':'2'),
          gridColumn:'1'}}>
            
        </div>
        <div className= {"textbox" + ( isClicked ?" arrow-active" :"")}>
          {text}
        </div>
    </div>
    
  );
};



const Bar = ({row,column}) =>{
  
  return (
    <div className= {row === 1?"top-bar":"bottom-bar"} style= {{ gridRow:row, gridColumn:column}}>
        
    </div>
  )
}
export const  TimeLine =() =>{
  const topVal = [
    
    {
      first:chineseNewYear,
      second:chineseFood,
      text:"Meals ususally consists of traditionally cooked food in combination with takeout ",
    },
    {
      first:chinese,
      second:home,
      text:'"Outside you are american, inside you are chinese"-my dad',

    },
    {
      first:beijing,
      second:winnieThePooh,
      text:"Lack of freedom of speech, lack of diversity ",

    }
    
    
  ]
  const botVal = [
    
    {
      first:christmas,
      second:americanFood,
      text:"Meals ususally consists of takeout plus some other side dish we would cook ",
    },
    {
      first:eng,
      second:school,
      text:"English was the only language I would speak from kindergarten to 6th grade",

    },
    {
      first:whiteHouse,
      second:trump,
      text:"Freedom of speech, a lot of diversity",

    }
    
    
  ]


    return(
      <div style = {{display:"grid",gridTemplateColumns:"80vw 20vw", 
      backgroundImage:"url("+bgImage+")",
      backgroundSize:"100% 100%",
      
      
      }}>
        <div className="timeLine" style ={{gridColumn:"1"}} >
          {/* top portion */}
          
          {
            topVal.map((item,index) =>{
              return(<ButtonDisplay beforeImage={item.first}
              afterImage={item.second} 
              direction={"down"}
              text={item.text}
              column={2*index+1}
              row= {1} 

              />)
              
            })
          }
          {
            [2,4].map((item)=>{
              return (<Bar row= {1} column={item}/>)
            })

            
          }
          {
            botVal.map((item,index) =>{
              return(<ButtonDisplay beforeImage={item.first}
              afterImage={item.second} 
              direction={"up"}
              text={item.text}
              column={2*index+1}
              row={2}

              />)
              
            })
          }
          <div className="diagonal-bar" style = {{gridColumn:"6"}}></div>
          <div className="diagonal-bar-bottom" style = {{gridColumn:"6", gridRow:'2'}}></div>
          {
            [2,4].map((item)=>{
              return (<Bar column={item} row={2}/>)
            })

            
          }
            
           
        </div>
        <div style ={{gridColumn:"2", transform:"translateY(40vh)"}}>
          <ButtonDisplay
            beforeImage={americhina}
            afterImage={after}
            direction={"down"}
            text={"Me now :)"}
          ></ButtonDisplay>
        </div>
      </div>
        
    )
}
