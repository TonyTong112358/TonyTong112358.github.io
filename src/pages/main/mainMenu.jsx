import { useState,useRef,useEffect } from "react";
import { TimeLine } from "../timeline/timeLine";
import "./mainMenu.css";
import useSound from "use-sound";
import boom from '../../assets/sound/boom.mp3'
import waterphone from '../../assets/sound/waterphone.mp3'
import leftMap from './image/mapLeft.png'
import rightMap from './image/mapRight.png'

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
  const [deleteEvery,setDeleteEvery] = useState(false)
  const mainCharacter = useRef(null)
  const [boomAudio] = useSound(boom)
  const [waterphineAudio] = useSound(waterphone)
  const [played, setPlayed] =useState(false)
  const[displayTimeLine,setDisplayTimeLine] = useState(false)
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
  }, []);

  const handleDelete = ()=>{
    boomAudio()
    const curtain = document.getElementsByClassName("curtain")
      const buttons = document.getElementsByClassName("button")
      let i =0
      while(buttons.length>0){
        
        
        
        buttons[i].parentNode.removeChild(buttons[i])
      }
    
    setTimeout(() => {
      setDeleteEvery(true)
      
    }, 3000);
    
  }

  return (
    <>
      { !deleteEvery && <div className="curtain" ref = {parent} >

        
        {images.map((image,index) =><CircleButton parent = {parent} image = {image} clicked = {clicked}/>)}
        
        <div id="right" ref={curtain}>

          <div
            ref={mainCharacter}
            id = "main-character"
            className={"button" }
            onMouseEnter={() => {
              if(!clicked){
                waterphineAudio()
              }
              
              setHover(true)
              
            }}
            onMouseLeave={() => {setHover(false)}}
            
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
            
            style={{left:mousePosition.x-100,top:mousePosition.y-100}}
            
      
          ></div>
          
          <div
          
            className={
              "rectangle " +
              (hover ? " active" : "") +
              (clicked ? " clicked" : "")
            }
            style={{backgroundImage:"url("+rightMap+")",backgroundPosition:"right"}}
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
            style={{backgroundImage:"url("+leftMap+")",backgroundPosition:"left"}}
          ></div>
        </div>
      </div>}
      </>

      
    );
  };
