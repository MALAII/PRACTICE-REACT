// Build a `LightSwitch` component that: * Has a button to turn the light “ON” or “OFF” * 
// The background color changes based on the light state

import {useState} from "react";

function LightSwitch(){
    const [lightSwitch, setLightSwitch]=useState(false)
    const HandleLight=()=>{
        setLightSwitch(!lightSwitch);
    }
    const style=
    {
        backgroundColor : lightSwitch ? "green" :"red",
        color :"white",
        padding :"10px"
    }
    return (
        <>
        <button onClick={HandleLight} style={style}>LIGHT :{lightSwitch? "ON ": " OFF "}</button>
        </>
    );

}
export default LightSwitch;