// Create an array [2, 4, 6, 8, 10].
// Use .map() to display each number multiplied by 2.

function NumberList(){
    const numbers=[2, 4, 6, 8, 10]
    return(
      <>
      <ul style={{listStyle:"none"}}>
         {numbers.map((num,index)=>(
        <li key={index}>{2*num}</li>
          ))

         }
        </ul>
        </>
    );
}
export default NumberList;