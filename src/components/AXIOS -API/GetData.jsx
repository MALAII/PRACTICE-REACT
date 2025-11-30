// fetching all email and name in display

import axios from "axios";
import { useEffect, useState } from "react";
function GetData(){

    const[data, setData]=useState([]);
    
    useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response=>{
    console.log(response.data)
    setData(response.data)
  })
  .catch(error=>{
    console.log("error in fetching data", error)
  });

    }, [])
 
    return(
        <div>
      {data ? (
        data.map((user , index)=>(
            <div key ={index}>
                <p>name: {user.name}</p>
               <p> email :{user.email}</p>
            </div>

        ))
      ) : (
        <div><p>Loading....</p></div>
        
      )}

        </div>
    );
}
export default GetData;