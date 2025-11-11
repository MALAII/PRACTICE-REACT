// Run When a Specific State Changes
// Create a text input for username.
// Whenever the username changes, log "Username updated!" in the console.
 
// used case 3 : with dependency runs whenever the state changes.
import { useEffect, useState } from "react";

function Practice3(){

    const[name, setName]=useState("");

   
    useEffect(()=>{
         console.log("username updated ! ")
    }, [name]);

    return(
        <>
        <form>
            <label>
                <input type="text" placeholder="enter your name" onChange={(e)=>(setName(e.target.value))} value={name}></input>
            </label>
        
        </form>
         <h2>Hello, {name}</h2>

        </>
    );
}
export default Practice3;