// List 4 student names and show their names with an index (1. Name).

function StudentNames(){
    const Students=['arun','arjun','vibov','preethi']
    return(
        <>
         <ul style={{listStyle:"none"}}>
          {Students.map((stud,index)=>(
            <li key={index}>{index+1} . {stud}</li>
          ))
          }
         </ul>

        </>
    );
}
export default StudentNames;