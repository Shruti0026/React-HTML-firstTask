import React, { useState } from "react";
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

const TableData=(props)=>{
    const [userData, setUserData] = useState(jsonData);
    

    const deleteRows = (id) => {
        console.log(id, "index to be deleted")
        let total = [...userData]
        total.splice(id, 1)
        setUserData(total)
    }

    const[editData, setEditData]=useState(null);
    const[editUserId, setEditUserId]= useState(null);
    // const[editFormData, setEditFormData] = useState({
    //     name:"",
    //     email:"",
    //     register_As:"",
    //     phone: "",
    //     password:"",
    //     confirm_Password:"",
    // })
    
    //const [userData, setUserData] = useState(jsonData);
    const id = userData.id;
    const[editFormData, setEditFormData] = useState();

    const handleEditClick= (id) =>{
        console.log(id, "index to be updated")
        const newEditItem = userData.map((data ,index)=>{
           if(index === id){
            console.log(data,'returned data')
            setEditFormData(data)
           } 
           //setEditData(data)
           console.log(data,'returned data outside if') 
           setEditFormData(data)
         
        });
    }



    const tableRows = userData.map((info, id) => {
        return ( 
            <StyledTableRow >
                <StyledTableCell align = "center" > { info.id }</StyledTableCell> 
                <StyledTableCell align = "center" > { info.name } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.email } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.register_As } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.phone } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.password } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.confirm_Password } </StyledTableCell> 
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
        //console.log(updatedUserData)
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
                <Signup func ={addRows}/> 
            </Grid >

        </Grid>
    )
}

export default TableData;