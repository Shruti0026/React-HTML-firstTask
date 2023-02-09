import React from "react";
import { Grid } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { deepPurple, blue,red } from '@mui/material/colors';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const paperStyle = { padding: 20, height: '70vh', width: 300, margin: "20px auto" }
const avatarStyle = { backgroundColor: '#1bbd7e' }
const btnstyle = { margin: '8px 0' }



function Login() {
    return ( 
        
        // <div className="form">
        //     <form >
                
        //         <fieldset className="fieldset" >
        //             <legend>Login Form</legend>
        //             <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control type="email" placeholder="Enter email" />
        //             <Form.Text className="text-muted">
        //              We'll never share your email with anyone else.
        //             </Form.Text>
        //              </Form.Group>
        //             <lable>User Name</lable><br />
        //             <input type="text" id="uname" placeholder="Enter Username" required /><br />
        //             <lable>Password</lable><br />
        //             <input type="password" id="pwd" placeholder="Enter Password" required /><br />
        //             <input type="checkbox" id="remember" />
        //             <lable> Remember Me</lable><br />
        //             <button className="login" onforminput="alert( 'login sucessful ' ) " >Login</button>
        //             <h4>Not a member?  <a href="/Signup">Register</a></h4>
        //             <h4>To Check Available User  <a href="/Userdata">Click Here</a></h4>


        //         </fieldset >
        //     </form>
        // </div>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField id="standard-basic" label="Username" placeholder='Enter username' fullWidth required variant="standard" />
                <TextField id="standard-basic" label="Password" placeholder='Enter password' type='password' fullWidth required variant="standard" />
                    
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Divider >
                    <Chip  label="OR" />
                </Divider>
                
                <Stack direction="row" spacing={2} paddingTop={3} justifyContent={'center'}>
                    <Avatar sx={{ bgcolor: red[500]}}><GoogleIcon/></Avatar>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}><FacebookIcon/></Avatar>
                    <Avatar sx={{ bgcolor: blue[500] }}><LinkedInIcon/></Avatar>
                </Stack>
                <Typography align="center" m={3}>
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography align="center"> Do you have an account ?
                    <Link href="/Signup" >
                        Sign Up 
                    </Link>
                </Typography>
            </Paper>
        </Grid>

    )
}

export default Login;