import React, { useState, createContext} from "react";
import { styled } from '@mui/material/styles'
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from '@mui/material/Paper';
import { tableCellClasses } from "@mui/material/TableCell";
import Signup from "./Signup";
import jsonData from './data.json'
import Divider from "@mui/material/Divider";
import MuiGrid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';


const avatarStyle = { backgroundColor: '#1bbd7e' }

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '95%',
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2),
    },
}));

export default function TableData({user}){
    const [userData, setUserData] = useState(jsonData);
    let [bolin,setBolin]=useState(false)
    

    const deleteRows = (id) => {
        console.log(id, "index to be deleted")
        let total = [...userData]
        total.splice(id, 1)
        setUserData(total)
    }


    
    const[editUserId, setEditUserId]= useState(null);
    
    const id = userData.id;
    const[editFormData, setEditFormData] = useState();
    const[editData, setEditData]=useState();
    


    const handleEditClick= (id) =>{
        console.log(id, "index to be updated")
        var newEditUser = userData.filter((user,index) => index === id);
        console.log(newEditUser,'indside newedituser'); 
        setEditData(newEditUser[0])
        setBolin(true)
    }; 
     




    const tableRows = userData.map((info, id ) => {
        return ( 
            
            <StyledTableRow >
                <StyledTableCell align = "center" > { info.id }</StyledTableCell> 
                <StyledTableCell align = "center" > { info.name  } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.email  } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.register_As  } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.phone } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.password } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.confirm_Password  } </StyledTableCell> 
                <StyledTableCell onClick = {() => deleteRows(userData.id) } > 
                        <Avatar style = { avatarStyle } >
                        <DeleteForeverIcon/>
                        </Avatar> 
                </StyledTableCell > 
                
               
                <StyledTableCell onClick={()=> handleEditClick(id)} > 
                        < Avatar style = { avatarStyle }>
                        <UpdateIcon  />
                        </Avatar> 
                </StyledTableCell> 
            </StyledTableRow>
        );
    });

    const addRows =(data)=>{
        const totalUser = userData.length;
        data.id = totalUser + 1;
        const updatedUserData = [...userData];
        updatedUserData.push(data);
        setUserData(updatedUserData);
        
    }

    const editRows =( data )=>{ 
        console.log(data,'newdata from signup')
        const editIndex = userData.map((e) => e.id ).indexOf(editData.id);
        console.log(editIndex,'editindex')
        const tempData =[...userData]
        tempData[editIndex] = data
        setEditUserId(editData.id[0])
        setUserData(tempData) 
        setBolin(false)       
    }

    

    return ( 

        <Grid container>
            <Grid item xs width = { 600 } marginLeft = { 5 }>
                <TableContainer component = { Paper } style = {{ margin: 'auto', marginTop: 50 }} >
                    <Table sx = {{ minWidth: 500 }} aria-label = "customized table" >
                        <TableHead >
                            <TableRow>
                                <StyledTableCell > S.No </StyledTableCell> 
                                <StyledTableCell align = "center" > Name </StyledTableCell> 
                                <StyledTableCell align = "center" > Email </StyledTableCell> 
                                <StyledTableCell align = "center" > Register As </StyledTableCell> 
                                <StyledTableCell align = "center" > Phone </StyledTableCell>
                                <StyledTableCell align = "center" > Password </StyledTableCell>
                                <StyledTableCell align = "center" > Confirm Password </StyledTableCell> 
                                <StyledTableCell align = "center" > Delete </StyledTableCell> 
                                <StyledTableCell align = "center" > Update </StyledTableCell>
                            </TableRow > 
                        </TableHead>
                    <TableBody> { tableRows } </TableBody>
                    </Table > 
                </TableContainer> 
            </Grid >
                <Divider orientation = "vertical" flexItem >
                </Divider>
            <Grid item xs width = { 350 }height = { 400 } > 
                <Signup func ={addRows} userData={userData} editData = {editData} editRows={editRows}/> 
            </Grid >

        </Grid>

        
    );

}
   


