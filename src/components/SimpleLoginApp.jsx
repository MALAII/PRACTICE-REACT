// Build a SimpleLoginApp:
// If logged out → show login form (username, password)
// If logged in → show a welcome message and logout button
// Use conditional rendering for switching pages

import { useState } from "react";
import Home from './Home';
function SimpleLoginApp(){
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const HandleLogin=()=>{
        setIsLoggedIn(true);
    }
    const HandleLogout=()=>{
        setIsLoggedIn(false);
    }
    return(
          <>
          {
            !isLoggedIn && (
                <>
                <p>Please Login !</p>
                USERNAME :<input type="text" name=""></input><br></br><br></br>
                PASSWORD : <input type="password" name=""></input><br></br><br></br>
                <button onClick={HandleLogin}>Login</button>
                </>

            )
          }
          {
            isLoggedIn &&(
                <>
                  <Home/>
                  <button onClick={HandleLogout}>Logout</button>
                </>

            )
          }
          </>
    );
}
export default SimpleLoginApp;