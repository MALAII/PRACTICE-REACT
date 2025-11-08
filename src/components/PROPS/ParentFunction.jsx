import ChildFunction from "./ChildFunction";
function ParentFunction(){
    const slowalert=()=>{
        alert("Hello from parent");
    }
    return(
<>
     <ChildFunction onClick={slowalert}/>
</>
    );
}
export default ParentFunction;
