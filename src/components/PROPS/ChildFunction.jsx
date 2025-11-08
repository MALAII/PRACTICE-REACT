// Syntax: <Child someFunction={functionName} />
// ### 7\. **Pass Function as Prop** **Task:** Parent sends a function `showAlert()` to Child. 
// When a button in the child is clicked, it calls that function.
function ChildFunction({onClick}){
    return(
 <>
     <button onClick={onClick}>click here</button>
 </>
    );
}
export default ChildFunction;