import { useState, useRef } from "react";
import { MainMenu,BackGround } from "./pages/main/mainMenu.jsx";

import IntroductionScreen from "./pages/introduction/introduction.jsx";
import "./index.css";
import "./App.css";
import { TimeLine } from "./pages/timeline/timeLine.jsx";

import image1 from "./assets/people/crystal.jpg"
import image2 from "./assets/people/elaine.png"
export default function App() {
  // const events = [
  //   {
  //     heading:"event1",
  //     subheading:"title",
  //     direction:"right"
  //   },
  //   {
  //     heading:"event2",
  //     subheading:"title2",
  //     direction:"left"
  //   }
  // ]
  return (
    <div>
      <IntroductionScreen/>
      <MainMenu /> 
  
      {/* <TimeLine/> */}
    </div>
    
  )
}
