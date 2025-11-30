import { useReducer } from "react";
 const initialState={
    isvisible:true,
 }
  function reducer(state,action){
    switch(action.type)
    {
        case "toggle":
            return{
           isvisible: !state.isvisible
            }
            default:
                return state;
            
    }
  }

function ToggleReducer(){
    const [state, dispatch]=useReducer(reducer,initialState)
    return(
        <>
              <h1>{state.isvisible ? "Visible" : "Hidden"}</h1>
        <button onClick={()=>{dispatch({type:"toggle"})}}>Button</button>

        </>
    );

}
export default ToggleReducer;