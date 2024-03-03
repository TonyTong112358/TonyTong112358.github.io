import { useState } from "react"
import useSound from "use-sound"
import cock from "./sprites/cock.gif"
import "./introduction.css"
import gradPhoto from "./sprites/graduation.jpg"
import funkyTown from "../../assets/sound/funkyTown.mp3"
export default function IntroductionScreen(){
    let [play, {pause}] = useSound(funkyTown)
    const [click,setClicked]  = useState(false)
    const [isPlaying,setIsPlaying] = useState(false)
    const playSong = () =>{
        if(!isPlaying){
            play()
            setIsPlaying(true)
        }
    }
    const deleteEverything = ()=>{
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
            </div>
            
            
            <div className="intro"  >
                <h1 > Welcome to an Autoethnography about: <br/>
                <span className = "centerMe">&#129313; me &#129313;</span>
                
                
                </h1>

                <div className="exitButton"
                onClick={()=>{
                    setClicked(true)
                    deleteEverything()
                    }}>
                    
                </div>
                

            </div>
            <div className="funkyImages">
                <img style = {{alignItems:"right",height:"100%"}}src = {gradPhoto}/>
                
            </div>
            
        </div>
    )
}