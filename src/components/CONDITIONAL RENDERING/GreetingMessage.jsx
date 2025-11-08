//Create a component GreetingMessage — if the time is before 12, 
// show “Good Morning”, else “Good Evening” using ternary.

function GreetingMessage(){
    const time= new Date();
    const hours= time.getHours();
    const message =hours < 12 ? "Good Morning" : "Good Evening";
    return(
     <h1>{message}</h1>
    );
    
}
export default GreetingMessage;