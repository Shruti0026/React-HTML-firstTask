import React from "react";

function Login() {
    return ( 
        <div className="form">
            <form >
                <fieldset className="fieldset" >
                    <legend>Login Form</legend>
                    <lable>User Name</lable><br />
                    <input type="text" id="uname" placeholder="Enter Username" required /><br />
                    <lable>Password</lable><br />
                    <input type="password" id="pwd" placeholder="Enter Password" required /><br />
                    <input type="checkbox" id="remember" />
                    <lable> Remember Me</lable><br />
                    <button className="login" onforminput="alert( 'login sucessful ' ) " >Login</button>
                    <h4>Not a member?  <a href="/Signup">Register</a></h4>
                    <h4>To Check Available User  <a href="/Userdata">Click Here</a></h4>


                </fieldset >
            </form>
        </div>

    )
}

export default Login;