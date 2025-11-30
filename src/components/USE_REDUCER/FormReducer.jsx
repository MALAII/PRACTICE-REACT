import { useReducer } from "react";

const initialState = {
    name: "",
    email: ""
}
function reducer(state, action) {
    switch (action.type) {
        case "SET_NAME": {
            return { ...state, name: action.payload }
        }
        case "SET_EMAIL": {
            return { ...state, email: action.payload }
        }
        default: {
            return state;
        }
    }
}

function FormReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <input type="name" value={state.name} onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} />
            <input type="email" value={state.email} onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })} />
            <h4>NAME: {state.name}</h4>
            <h4>EMAIL : {state.email}</h4>

        </>
    );
}
export default FormReducer;