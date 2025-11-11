// Run on Every Render
// Create a counter app.
// Log "Component rendered" in the console every time the counter changes.

import { useEffect, useState } from "react";

//used case 3 : with dependency array whenever the state changes it runs

function Practice2(){

    const [count, setCount]=useState(0);

    useEffect(()=>{
        console.log("component rendered");
    }, [count])

    return(
     <>
     <h2>Count: {count}</h2>
     <button onClick={()=>setCount(count+1)}> increment</button>
     </>
    );
}
export default Practice2;