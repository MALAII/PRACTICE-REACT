// Create a <Student /> component that receives name and age as props and displays them.
function Student({user}){
    return(
      <>
      <p>{user.name} : {user.age}</p>
      </>
    );
}
export default Student;