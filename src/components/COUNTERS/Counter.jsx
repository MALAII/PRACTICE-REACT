import {useState} from "react";
function Counter(){
    const [count, setCount]=useState(0)
    const increment=()=>
    {
        setCount(count+1)
    }
    const decrement=()=>
    {
        if(count >0)
        {
            setCount(count-1);
        }
        else{
            alert('Count must be greater than zero');
        }
    }
    const reset=()=>{
        setCount(0);
    }

    return(
        <>
<p>Counter={count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        </>
    );

}
export default Counter;