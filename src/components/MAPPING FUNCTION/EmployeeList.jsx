// Create an array of employee objects and display name + department using .map().
 
function EmployeeList(){
       const Employee=[
        {
            name:"arun",
            department:"HR"
        },
        {
            name:"Keerthana",
            department:"sales"
        },
        {
            name:"Karthick",
            department:"Manager"
        },
        {
            name:"Priya",
            department:"Chief Executive"
        },
       ]

    return(
        <>
            {Employee.map((emp,index)=>(
                <p key ={index}>{emp.name} - {emp.department}</p>
            ))

            }
        </>

    );


}
export default EmployeeList;