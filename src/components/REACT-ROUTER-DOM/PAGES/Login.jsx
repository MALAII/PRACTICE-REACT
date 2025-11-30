import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handlereset=()=>{
        setEmail('');
        setPassword('');
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (email==="admin123@gmail.com" ){
           navigate('/home');
        }
        else{
            alert("enter a valid email to login");
        }
        
       

    }
    return (
        <>

            <form onSubmit={handlesubmit}>
                <table>
                    <tr>
                        <td><label>Email :</label></td>
                        <td><input type="email" placeholder="@gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} required /></td>
                    </tr>
                    <tr>
                        <td><label>Password :</label></td>
                        <td><input type="Password" placeholder="Enter your password " value={password} onChange={(e) => { setPassword(e.target.value) }} required /></td>
                    </tr>
                    <tr>
                        <td><button type="submit">Submit</button></td>
                        <td><button type="reset" onClick={handlereset}>Reset</button></td>
                    </tr>






                </table>



            </form>


        </>
    );

}
export default Login; 