import React from "react";

function Userdata() {
    return (

        <div className="container" style={{marginBlockStart: "8%"}}>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"></link>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Register As</th>
                    <th scope="col">DoB</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Shruti</td>
                    <td>Student</td>
                    <td>26-6-2000</td>
                    <td>846-611-2513</td>
                    <td>shruti@gmail.com</td>
                    <td>shruti</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Daya</td>
                    <td>Teacher</td>
                    <td>02-08-1990</td>
                    <td>854-235-5446</td>
                    <td>Daya@gmail.com</td>
                    <td>Daya</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Aniket</td>
                    <td>Student</td>
                    <td>10-04-1998</td>
                    <td>768-564-5454</td>
                    <td>aniket@gmail.com</td>
                    <td>aniket</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>om</td>
                    <td>Student</td>
                    <td>17-03-2002</td>
                    <td>986-124-2244</td>
                    <td>om@gmail.com</td>
                    <td>om</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Anuradha</td>
                    <td>Teacher</td>
                    <td>17-12-1978</td>
                    <td>864-787-3322</td>
                    <td>anuradha@gmail.com</td>
                    <td>anurdha</td>
                </tr>
            </tbody>
        </table>
        <h4 style={{fontsize:"30px"}}>Have already an account? <a href="/Login" style={{color: "#3d64b8"}}> Login here</a><br /></h4>
        <h4>Not a member? <a href="/Signup" style={{color: "#3d64b8"}}>Register</a></h4><br />
    </div>

    )
}

export default Userdata;