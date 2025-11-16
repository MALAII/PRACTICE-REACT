// Navigate Back
// Add a Back button that takes the user to the previous page using:


import { useNavigate } from "react-router-dom";

function NavigateBack(){

    const navigate=useNavigate();
    const handleback=()=>{
        navigate(-1);
    }
    return(

        <>
        <button onClick={handleback}>Back </button>

        </>
    );
}
export default NavigateBack;