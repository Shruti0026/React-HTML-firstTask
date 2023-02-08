import React from "react";

function Signup() {
    return (

        <div className="form">
        <form>
            <fieldset className="fieldset">
                <legend>Sign Up Form</legend>
                <lable>Full Name</lable><br />
                <input type="text" id="name" name="name" placeholder="Enter Your Name" required /><br />

                <label> Register As :</label><br />
                <input type="radio" value="teacher" name="register" /> Teacher
                <input type="radio" value="Student" name="register" />Student
                <input type="radio" value="Other" name="register" /> Other
                <br />
                <label>Date of Birth</label>
                <input type="date" placeholder="Enter Birth Date " name="dob" />

                <label> Phone :</label>
                <input type="tel" name="phone " placeholder="+91 864 864 8644" size="10" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /><br />

                <label>Email:</label>
                <input type="email" id="email " name="email " required placeholder="Enter Email Id " /><br />

                <lable>Password</lable><br />
                <input type="password" id="pwd" name="pwd" placeholder="Enter Password " required /><br />

                <label>Re-type Password</label>
                <input type="password" id="repass " name="repass " placeholder="Re-Enter Password " /><br />

                <button type="submit" class="registerbtn">Register</button>
                <button type="reset" class="registerbtn">Reset</button>
                <h4>Have already an account? <a href="/Login"> Login here</a><br /></h4>
                <h4>To Check Available User <a href="/Userdata">Click Here</a></h4>
               
            </fieldset>
        </form>
    </div>

    )
}

export default Signup;