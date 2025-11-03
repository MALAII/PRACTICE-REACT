import {useState} from "react"
import Home from './Home';

function LoginButton (){
    const [isLogin, setIsLogin]=useState(false);
    const HandleLogin=()=>{
         setIsLogin(true);
    }
       
    const HandleLogout=()=>{
  setIsLogin(false);
    }
      
    return(
        <div>
        {!isLogin && (
            <>
            <p>You are not logged in</p>
            <button onClick={HandleLogin}>Login</button>
            </>
        )
        }
        {isLogin && (
            <>
            <Home/>
            <button onClick={HandleLogout}>Logout</button>
            </>
        )
        }
        </div>
    );

}
export default LoginButton;
