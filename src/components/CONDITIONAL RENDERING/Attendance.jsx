import {useState} from "react";
function Attendance(props){
    const [ispresent, setIsPresent]=useState(true);
     const toggleAttendance=()=>setIsPresent(!ispresent);
    return(
       <div>
        <h1>{props.name}</h1>
        <p>Status :{ispresent ? "Present": "Absent"}</p>
        <button onClick={toggleAttendance}>
            {ispresent? "Mark absent": "Mark present"}
        </button>
       </div>
    );
}
export default Attendance;