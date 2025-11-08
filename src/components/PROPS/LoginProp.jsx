// Create a <LoginStatus /> component that shows
// "Welcome back!" if isLoggedIn={true}
// "Please login" if isLoggedIn={false}

function LoginProp({user}){

    return(

        <>
        <h1>{user.isloggedin? "welcome": "please Login"}</h1>
        </>
    );
}
export default LoginProp;