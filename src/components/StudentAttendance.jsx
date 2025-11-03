// Create a StudentAttendance component that:
// Takes student names as props
// Displays each student with a Present/Absent toggle button using state

import {useState} from "react";
function StudentAttendance({name}){
    const [attendance , setAttendance]=useState(false)
    const ToggleButton=()=>
    {
        setAttendance(!attendance);
    }
    return(
        <>
     <h2>{name}</h2>
     <button onClick={ToggleButton}>{attendance ? "present" :"absent"}</button>
     </>
    );
}
export default StudentAttendance;