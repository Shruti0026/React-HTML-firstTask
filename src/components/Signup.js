import React,{useState} from "react";
import jsonData from './data.json'
import { Grid } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
// import Divider from "@mui/material/Divider";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
// import { deepPurple, blue,red } from '@mui/material/colors';
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';


    const paperStyle = { padding: '30px 20px',height: 500,width: 400, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const btnstyle={margin:'8px 0'}

    
    
function Signup(props){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [register_As, setRegister_As]= useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [confirm_Password,setConfirmPassword] = useState('');
    //const [userData, setUserData] = useState(jsonData);
        
    const changeName=(event)=>{
        setName(event.target.value);
    };

    const changeEmail=(event)=>{
        setEmail(event.target.value);
    };

    const changeRegister_As=(event)=>{
        setRegister_As(event.target.value);
    };

    const changePhone=(event)=>{
        setPhone(event.target.value);
    };

    const changePassword=(event)=>{
        setPassword(event.target.value);
    };

    const changeConfirm_Password=(event)=>{
        setConfirmPassword(event.target.value);
    };

    const transferValue=(event)=>{
        event.preventDefault();
        const val ={
            name,
            email,
            register_As,
            phone,
            password,
            confirm_Password,
        };
        props.func(val);
        clearState();
    };

    const clearState =()=>{
        setName('');
        setEmail('');
        setRegister_As('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
    };

    const[editData, setEditData]=useState(null);
    const updateRows=(id)=>{
        

    }


    return (
            // <div className="form">
            //     <form>
            //         <fieldset className="fieldset">
            //             <legend>Sign Up Form</legend>
            //             <lable>Full Name</lable><br />
            //             <input type="text" id="name" name="name" placeholder="Enter Your Name" required /><br />
        
            //             <label> Register As :</label><br />
            //             <input type="radio" value="teacher" name="register" /> Teacher
            //             <input type="radio" value="Student" name="register" />Student
            //             <input type="radio" value="Other" name="register" /> Other
            //             <br />
            //             <label>Date of Birth</label>
            //             <input type="date" placeholder="Enter Birth Date " name="dob" />
        
            //             <label> Phone :</label>
            //             <input type="tel" name="phone " placeholder="+91 864 864 8644" size="10" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /><br />
        
            //             <label>Email:</label>
            //             <input type="email" id="email " name="email " required placeholder="Enter Email Id " /><br />
        
            //             <lable>Password</lable><br />
            //             <input type="password" id="pwd" name="pwd" placeholder="Enter Password " required /><br />
        
            //             <label>Re-type Password</label>
            //             <input type="password" id="repass " name="repass " placeholder="Re-Enter Password " /><br />
        
            //             <button type="submit" class="registerbtn">Register</button>
            //             <button type="reset" class="registerbtn">Reset</button>
            //             <h4>Have already an account? <a href="/Login"> Login here</a><br /></h4>
            //             <h4>To Check Available User <a href="/Userdata">Click Here</a></h4>
                       
            //         </fieldset>
            //     </form>
            // </div>
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
               
                    <TextField id="standard-basic" label="Name" value={name} onChange={changeName} on placeholder='Enter your full name' fullWidth required variant="standard" />
                    <TextField id="standard-basic" label="Email" value={email} onChange={changeEmail} placeholder='Enter your Email' fullWidth required variant="standard" />
                    
                <FormControl component="fieldset" style={marginTop}>
                    <FormLabel component="legend">Register As:</FormLabel>
                    <RadioGroup aria-label="type" name="type" value={register_As} onChange={changeRegister_As} style={{ display: 'initial' }}>
                        <FormControlLabel value="Teacher" control={<Radio />} label="Teacher" />
                        <FormControlLabel value="Student" control={<Radio />} label="Student" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                    <TextField id="standard-basic" label="Phone Number" value={phone} onChange={changePhone} placeholder='Enter your phone number' fullWidth required variant="standard" />
                    <TextField id="standard-basic" label="Password" value={password} onChange={changePassword} placeholder='Enter your password' fullWidth required variant="standard" />
                    <TextField id="standard-basic" label="Confirm Password" value={confirm_Password} onChange={changeConfirm_Password} placeholder='Confirm your password' fullWidth required variant="standard" />
                
                <FormControlLabel
                    control={<Checkbox name="checkedA" />}
                    label="I accept the terms and conditions."
                />
                <Button type='submit' variant='contained' color='primary' onClick={transferValue} style={btnstyle} fullWidth>Sign up</Button>
                    {/* <Divider >
                        <Chip  label="OR" />
                    </Divider>onClick={transferValue}
                        
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
                    <Typography align="center"> Already Have account ?
                        <Link href="/Login" >
                            Login In
                        </Link>
                    </Typography> */}
               
            </Paper>
        </Grid>            
    )

}


export default Signup ;

