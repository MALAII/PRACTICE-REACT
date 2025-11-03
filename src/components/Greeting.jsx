// Create a component that displays "Good Morning" or "Good Evening" 
// depending on the time of day (use JavaScript Date()).

function Greeting(){
    const date=new Date ();
    const hour = date.getHours();
    console.log(hour);
  return (
    <>
    <h1>{hour < 12 ? "Good morning" : "Good Evening"}
    </h1>
    </>
  )
}
export default Greeting;