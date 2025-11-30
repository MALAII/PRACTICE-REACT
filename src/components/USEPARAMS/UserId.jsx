import { useParams } from "react-router-dom";

function UserId(){

    const {id} = useParams();
    return(
        <>
        <h1>the user id is {id}</h1>
        </>
    );

}
export default UserId;