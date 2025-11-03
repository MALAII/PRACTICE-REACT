import {useState} from "react";
function ToggleContent(){
    const [toggleContent , setToggleContent]=useState(false)
    const HandleShow=()=>{
        setToggleContent(true)
    }
    const HandleHide=()=>{
        setToggleContent(false)
    }
    return(
        <>
        {!toggleContent &&(
        <button onClick={HandleShow}>Show Content</button>
        )
        }
        {toggleContent &&(
                <>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, maiores?</p>
                <button onClick={HandleHide}>Hide Content</button>
                </>
            )
        }
    
        </>
    );

}
export default ToggleContent;