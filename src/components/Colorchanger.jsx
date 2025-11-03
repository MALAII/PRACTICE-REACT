// Create a `ColorChanger` component that: * Has 3 buttons: Red, Green, Blue * 
// When you click one, the text color changes accordingly

import {useState} from "react";
function ColorChanger(){
    const[color, setChangeColor]=useState("black")
    const MakeRed=()=>
    {
        setChangeColor("red")
    }
     const MakeGreen=()=>
    {
        setChangeColor("green")
    }
     const MakeBlue=()=>
    {
        setChangeColor("blue")
    }
    return(
      <>
      <p style={{ color: color}}>Hi ! my name is malaiyarasi</p>
      <button onClick={MakeRed}>Red</button>
      <button onClick={MakeGreen}>Green</button>
      <button onClick={MakeBlue}>Blue</button>
      </>
    );
}
export default ColorChanger;