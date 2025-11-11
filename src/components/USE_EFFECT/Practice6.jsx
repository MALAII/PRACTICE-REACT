// Theme Change Example
// Use a state theme (light/dark).
// Change the background color of the page using useEffect when theme changes.

// used case 3 : with dependencies runs whenever the state changes.

import { useEffect, useState } from "react";

function Practice6() {

    const [theme, setTheme] = useState(true);

    useEffect(()=>{
        console.log("theme color changed")
        document.body.style.backgroundColor = theme ? "white" : "black";
          
    },[theme]);

    return (
        <>
           <button onClick={()=>(setTheme(!theme))}>{theme? "dark" :" light"}</button>
           <h2>Current Theme: {theme ? "light" :"dark"}</h2>

        </>
    );
}
export default Practice6;