// Create a list of city names and display them using .map().

function CityList(){
    const city=['chennai','vellore','trichy','pondicherry','mumbai','delhi']
    return(
        <>
         {city.map((citiee , index)=>(
            <li key={index}>{citiee}</li>
         ))

         }
        </>
    );
}
export default CityList;