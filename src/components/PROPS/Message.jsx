// Create a Msg component that receives a message from props and displays it inside an <h2> tag.
function Message(props){
   
    return(
       <>
       <h1>{props.message}</h1>
       </>
    );
}
export default Message;