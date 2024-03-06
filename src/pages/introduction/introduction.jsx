import { useState } from "react"
import useSound from "use-sound"
import cock from "./sprites/cock.gif"
import "./introduction.css"
import gradPhoto from "./sprites/tonyvpn_withnose.png"
import funkyTown from "../../assets/sound/funkyTown.mp3"
import fade from "../../assets/sound/fade.mp3"
import family from "./sprites/family.jpg"
import tacoBell from "../../assets/sound/tacoBell.mp3"
import clown from "../../assets/sound/clown.mp3"

export default function IntroductionScreen(){
    let [play, {pause}] = useSound(funkyTown)
    let [fadeAway] = useSound(fade)
    const [taco] = useSound(tacoBell)
    const [click,setClicked]  = useState(false)
    const [isPlaying,setIsPlaying] = useState(false)
    const [hovering,setHovering] = useState(false)
    const [clownSound] = useSound(clown)
    const playSong = () =>{
        if(!isPlaying){
            play()
            setIsPlaying(true)
        }
    }
    const deleteEverything = ()=>{
        fadeAway()
        setTimeout(()=>{
            const element = document.getElementsByClassName("screen")
            // element.remove()
            element[0].remove()
            pause()
            
            
        },3000)
        // const element = document.getElementsByClassName("screen")
        // element[0].remove()
        // 
        
    
    }
    const onHover= ()=>{

        setHovering(true)
        taco()
    }
    const pauseSong = () =>{
        if(isPlaying){
            pause()
            setIsPlaying(false)
        }
    }
    return(
        <div className={"screen" + (click? " clicked":"")} >
            <div className="funkyImages" >
                <img className="cockroach" src = {cock}
                
                    onMouseEnter={playSong}
                    onMouseLeave={pauseSong}
                // style = {{transform:"scale(0.5)"}}
                />
                <img src = {family} style= {{height:"52.5%",width:"100%"}}></img>
                
            </div>
            
            
            <div className="intro"  >
                <h1 >  <span style={{fontSize:"30px", backgroundColor:"radial-gradient(#2E3192 ,#1BFFFF)" ,color:"white"} }>Welcome to an Autoethnography about:</span> <br/>
                <span className = "centerMe">&#129313; me &#129313;</span>
                <center><span style = {{fontSize:"20px", color:"white"}}>Your fellow yellow</span></center>
                
                </h1>

                <div className={"exitButton" +(hovering?" hover":"")}
                back
                onMouseEnter={onHover}
                onMouseLeave={()=>setHovering(false)}
                onClick={()=>{
                    setClicked(true)
                    deleteEverything()
                    }}
                
                    >
                
                </div>
                
                
                    
            </div>
            <div className="funkyImages"  style = {{justifyContent:"space-between",height:"100%"}}>
                <img src = {gradPhoto} onMouseEnter={clownSound} />
                
            </div>
            
        </div>
    )
}