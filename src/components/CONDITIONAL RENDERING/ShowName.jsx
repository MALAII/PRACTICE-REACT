// Create a component ShowName — have a button Show / Hide Name 
// (toggle name display using ternary).

import {useState} from "react";
function ShowName(){
    const [isShow, setIsShow]=useState(false)
    const ToggleButton=()=>{
        setIsShow(!isShow);
    }

    return(
        <>
        <button onClick={ToggleButton}>{isShow?"Hide":"Show"}</button>
        {
            isShow && (
                <h1>This is the hidden Message !</h1>
            )
        }
        </>
    );
}
export default ShowName;