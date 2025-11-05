// List of Fruits
// Create an array ["Apple", "Mango", "Banana", "Orange"].
// Display all fruit names using .map() inside a <ul>.

function FruitsList(){
       const fruits=["Apple", "Mango", "Banana", "Orange"]
    return(
         <>
         <ul style={{listStyle:"none"}}>
            {fruits.map((fruit,index)=>
            (<li key={index}>{fruit}</li>

            ))

            }
         </ul>

         </>
    );
}
export default FruitsList;