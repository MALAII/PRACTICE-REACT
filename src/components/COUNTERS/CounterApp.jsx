// Create a `CounterApp` — increase, decrease, and 
// reset a number (but the number should not go below 0 or above 10).

import { useState } from "react";
function CounterApp() {
    const [count, setCount]=useState(0);
    const increment=()=>{
    
      if (count< 10){
        setCount(count+1)
      }
      else {
        alert ("The count should not exceeed 10")
      }
    }
    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
        else{
            alert("Count should be greater than zero")
        }
    }
    const Reset=()=>{
        setCount(0);
    }
    

    
    return (
        <>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={Reset}>Reset</button>
        </>
    );
}
export default CounterApp;