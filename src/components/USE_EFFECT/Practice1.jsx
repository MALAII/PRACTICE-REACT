// Run Once on Load
// Show a message "Welcome to my page!" in an alert only when the component first loads.

// used case 2: empty dependency array  

import { useEffect } from "react";

function Practice1(props){

      useEffect(()=>{
        alert("welcome to my page")
      },[]);

    return(
        <>
       <p>name :{props.name}</p>
        </>
    );
}
export default Practice1;