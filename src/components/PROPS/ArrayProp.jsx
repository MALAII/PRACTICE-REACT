// Create a <FruitsList /> component that receives a fruits array and displays all fruits using .map().

function FruitComp({fruits}){
    return(
      <>
        {
            fruits.map((frut,index)=>(
                <p key={index}>{frut}</p>
            ))
        }
      </>
    );
}
export default FruitComp;