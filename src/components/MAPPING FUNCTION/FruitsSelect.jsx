// Make an array of fruits and display them inside <option> tags in a <select> dropdown.

function Fruits(){
        const fruits=["Apple", "Mango", "Banana", "Orange"]

    return(
         <select>
            {fruits.map((fruit,index)=>(
                <option key={index}>{fruit}</option>
            ))

            }
        
         </select>
    );
}
export default Fruits;