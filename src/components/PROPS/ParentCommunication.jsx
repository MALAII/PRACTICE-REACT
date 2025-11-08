import ChildComponent from "./ChildCommunication";

function ParentCommunication(){
    return(
        <ChildComponent message="PROPS"/>
    );
   
}
export default ParentCommunication;