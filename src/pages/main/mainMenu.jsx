import { useState,useRef,useEffect } from "react";
import { TimeLine } from "../timeline/timeLine";
import "./mainMenu.css";
import useSound from "use-sound";
import boom from '../../assets/sound/boom.mp3'
import waterphone from '../../assets/sound/waterphone.mp3'


const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../assets/people', false, /\.(png|jpe?g|svg)$/));

const CircleButton= ({parent,image,clicked}) =>{
  const [hover,setHover] = useState(false)
  const [position, setPosition] = useState({x:0,y:0})
  

  
  useEffect(()=>{
    
    const parentWidth = parent.current.offsetWidth
    const parentHeight = parent.current.offsetHeight
    const randomX = parseInt(Math.random()*(parentWidth-100))
    const randomY = parseInt(Math.random()*(parentHeight-100))
      
    setPosition({x:randomX,y:randomY})    
  },[parent])
  
  return (
    <div className={"button"+(clicked? " fadeAway":"")}
      style = {{
        backgroundImage:hover &&("url("+image+")"),
        
        left:`${position.x}px`,
        top:`${position.y}px`,
        
      }}
      onMouseEnter={() =>setHover(true)}
      onMouseLeave ={ () =>setHover(false)}>

    </div>
  )
} 




export const MainMenu = () => {
  

  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const curtain = useRef(null)
  const parent =useRef(null)
  const mainCharacter = useRef(null)
  const [boomAudio] = useSound(boom)
  const [waterphineAudio] = useSound(waterphone)
  const [played, setPlayed] =useState(false)
  const [mousePosition,setMousePosition] = useState({
    x:0,
    y:0
  })
  
  const [clicking,setClicking] = useState(false)
  useEffect(() => {
    setMousePosition(
      {
        x:parseInt(Math.random()*(parent.current.offsetWidth-50))+50,
        y:parseInt(Math.random()*(parent.current.offsetHeight-50))+50,
      }
    )
  }, [parent]);
  const handleDelete = ()=>{
    boomAudio()
    
    setTimeout(() => {
      
      const buttons = document.getElementsByClassName("button")
      let i =0
      while(buttons.length>1){
        if (buttons[0].id ==="main-character"){
          i+=1
        }
        
        
        buttons[i].parentNode.removeChild(buttons[i])
      }
    }, 2000);
    
  }
 
  
  const handleMouseMove = (event)=>{
    if(clicking){
      setMousePosition({x:event.clientX,y:event.clientY})
    }
  }
  
  
  

  
  

  

  
  return (
    <>
      <div className="curtain" ref = {parent} >
        {images.map((image,index) =><CircleButton parent = {parent} image = {image} clicked = {clicked}/>)}
        
        <div id="right" ref={curtain}>

          <div
            id = "main-character"
            className={"button"+" shadow"}
            onMouseEnter={() => {
              if(!clicked){
                boomAudio()
              }
              
              setHover(true)
              

              
              
              
            }}
            onMouseLeave={() => {setHover(false)}}
            onMouseMove={handleMouseMove}
            onMouseDown={() =>{
              if(!clicked) {
                setClicking(true)
                setClicked(true)
                handleDelete()
                waterphineAudio()
              }
              
              
            }
            

            }
            onMouseUp={()=>{
              setClicking(false)
            }}
            // onClick={ }
            
            style={{left:mousePosition.x-50,top:mousePosition.y-50}}
            
      
          ></div>
          
          <div
          
            className={
              "rectangle " +
              (hover ? " active" : "") +
              (clicked ? " clicked" : "")
            }
          >
            
          </div>
        </div>

        <div id="left">
          <div
            className={
              "rectangle" +
              (hover ? " active" : "") +
              (clicked ? " clicked" : "")
            }
          ></div>
        </div>
      </div>
    </>
  );
};
