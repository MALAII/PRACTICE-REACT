// Dependency Array Practice
// Use multiple dependencies: [name, age].
// Log "Name or age changed" every time either one changes.

//used case 3 with dependencies run whenever the state changes

import { useEffect, useState } from "react";

function Practice5(){

    const [name,setName]=useState('');
    const [age,setAge]=useState('');

    useEffect(()=>{
        alert(" name or age updated")
    }, [name , age]);


    return(
        <>
        <form>
            <label>NAME: </label>
            <input type="text" placeholder="enter your name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>

             <label>AGE: </label>
            <input type="text" placeholder="enter your age" value={age} onChange={(e)=>{setAge(e.target.value)}}></input>
        </form>

        <h4>{name} - {age}</h4>
        
        </>
    );
}
export default Practice5;