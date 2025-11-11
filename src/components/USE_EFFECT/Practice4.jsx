// Alert on Specific Change
// Create two states: name and age.
// When only the age changes, show an alert "Age updated!"

// used case 3 :with dependencies runs whenever the state changes

import { useEffect, useState } from "react";

function Practice4(){

    const [name,setName]=useState('');
    const [age,setAge]=useState('');

    useEffect(()=>{
        alert("age updated")
    }, [age]);


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
export default Practice4;