// Names with Index
// Create an array of names ["Sara", "Ravi", "Anu"].
// Display each name along with its index number (Ex: 1. Sara).

function NameList(){
    const names=["Sara", "Ravi", "Anu"]
    return(
     <>
     <ul style={{listStyle:"none"}}>
        {names.map((name,index)=>(
            <li key={index}>{index +1}. {name}</li>
        ))

        }


     </ul>
     
     </>
    );
}
export default NameList;