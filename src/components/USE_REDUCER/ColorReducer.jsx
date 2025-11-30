import { useReducer } from "react";

const initialState={
    theme:""
}

function reducer (state,actions)
{
    switch(actions.type){
        case "SET_LIGHT":{
            return{theme : "light"}
        }
        case "SET_DARK":{
            return{theme:"dark"}
        }
        default:
            {
                return state;
            }
    }
}

function ColorReducer(){
    const[state,dispatch]=useReducer(reducer,initialState)

    return(

    <>
    
     <button onClick={()=>{dispatch({type:"SET_LIGHT"})}}>Light</button>
     <button onClick={()=>{dispatch({type:"SET_DARK"})}}>Dark</button>
     <h1>{state.theme}</h1>


    </>
    );
}



export default ColorReducer;