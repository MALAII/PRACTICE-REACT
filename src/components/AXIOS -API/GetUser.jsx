//fetching user 1 data:

import axios from "axios";
import { useEffect, useState } from "react";


function GetUser(){

    const[user ,setUser]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then(response=>{
            console.log(response.data)
            setUser(response.data)
        })
        .catch(error=>{
            console.log("error while fetching : " , error)
        });
    },[]);
      
    return(
        <div>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    );
}
export default GetUser;