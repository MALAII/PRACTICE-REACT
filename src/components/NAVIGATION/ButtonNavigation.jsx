// Button Navigation
// Create a button that takes the user to /home when clicked using useNavigate().

import { useNavigate } from "react-router-dom";

function ButtonNavigation(){

    const navigate= useNavigate();

    const handlebutton=()=>{
        navigate('/home');
    }
    return(
       <>
       <button onClick={handlebutton}>Home</button>

       
       </>
    );
}
export default ButtonNavigation;