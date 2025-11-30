import { useReducer } from "react";
const initialState={
    message:""
}
function reducer(state,action){
    switch(action.type)
    {
        case "red":
            {
                 return{message:"stop"}
            }
            case "green":{
                return {message:"goo"}
            }
            case "yellow":{
                return{message:"wait"}
            }
            default:
                {
                    return state;
                }
          
}
}
function TrafficReducer(){
    const[state, dispatch]=useReducer(reducer,initialState)
    return(
        <>
        <button onClick={()=>{dispatch({type:"red"})}}>Red</button>
        <button onClick={()=>{dispatch({type:"green"})}}> Green</button>
        <button onClick={()=>{dispatch({type: "yellow"})}}>yellow</button>
        <h1>{state.message}</h1>
        </>
    );
}
export default TrafficReducer;