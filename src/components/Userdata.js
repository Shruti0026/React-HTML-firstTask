import React from "react";
import {styled} from '@mui/material/styles'
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from '@mui/material/Paper';
import {tableCellClasses} from "@mui/material/TableCell";

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

  function createData(number, Name,Email, Register_As,Phone,Password,Confirm_Password) {
    return { number, Name,Email, Register_As,Phone,Password,Confirm_Password};
  }
  
  const rows = [
    createData(1,"Shruti", "shruti@gmail.com","Student",8456465454,"Shruti","Shruti"),
    createData(2, "Om", "Om@gmail.com","Student",9864451546,"Om124","Om124"),
    createData(3, "Daya", "Daya@gmail.com","Teacher",7945452131,"Daya2","Daya2"),
    createData(4, "Anuradha", "anuradha@gmail.com","Teacher",9786561111,"Anu64","Anu64"),
    createData(5, "Aniket", "aniket@gmail.com","Student",7664542216,"Aniket26","Aniket26"),
    createData(6,"Craggy Hairyes", "chairyes0@china.com.cn","Student", 8374719165, "g8TesQ","g8TesQ"),
    createData( 7,"Madel Drydale","mdrydale1@amazon.de","Teacher", 8383266006,"mqlLkNp","mqlLkNp"),
    createData(8,"Essy Saban","esaban2@house.gov","Student",9252201634,"KAUk6nFQE","KAUk6nFQE"),
    createData(9,"Karon Rizzetti","krizzetti3@ask.com","Student",8621707679,"eWafLBB","eWafLBB"),
    createData( 10,"Montague Feechum","mfeechum6@wordpress.org","Student",9154714389,"ZSETQ7","ZSETQ7")
  
  ];

function Userdata() {
    return (

        //     <div className="container" style={{marginBlockStart: "8%"}}>
        //      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"></link>
        //     <table className="table">
        //         <thead className="thead-dark">
        //             <tr>
        //                 <th scope="col">#</th>
        //                 <th scope="col">Name</th>
        //                 <th scope="col">Register As</th>
        //                 <th scope="col">DoB</th>
        //                 <th scope="col">Phone</th>
        //                 <th scope="col">Email</th>
        //                 <th scope="col">Password</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //                 <th scope="row">1</th>
        //                 <td>Shruti</td>
        //                 <td>Student</td>
        //                 <td>26-6-2000</td>
        //                 <td>846-611-2513</td>
        //                 <td>shruti@gmail.com</td>
        //                 <td>shruti</td>
        //             </tr>
        //             <tr>
        //                 <th scope="row">2</th>
        //                 <td>Daya</td>
        //                 <td>Teacher</td>
        //                 <td>02-08-1990</td>
        //                 <td>854-235-5446</td>
        //                 <td>Daya@gmail.com</td>
        //                 <td>Daya</td>
        //             </tr>
        //             <tr>
        //                 <th scope="row">3</th>
        //                 <td>Aniket</td>
        //                 <td>Student</td>
        //                 <td>10-04-1998</td>
        //                 <td>768-564-5454</td>
        //                 <td>aniket@gmail.com</td>
        //                 <td>aniket</td>
        //             </tr>
        //             <tr>
        //                 <th scope="row">4</th>
        //                 <td>om</td>
        //                 <td>Student</td>
        //                 <td>17-03-2002</td>
        //                 <td>986-124-2244</td>
        //                 <td>om@gmail.com</td>
        //                 <td>om</td>
        //             </tr>
        //             <tr>
        //                 <th scope="row">5</th>
        //                 <td>Anuradha</td>
        //                 <td>Teacher</td>
        //                 <td>17-12-1978</td>
        //                 <td>864-787-3322</td>
        //                 <td>anuradha@gmail.com</td>
        //                 <td>anurdha</td>
        //             </tr>
        //         </tbody>
        //     </table>
        //     <h4 style={{fontsize:"30px"}}>Have already an account? <a href="/Login" style={{color: "#3d64b8"}}> Login here</a><br /></h4>
        //     <h4>Not a member? <a href="/Signup" style={{color: "#3d64b8"}}>Register</a></h4><br />
        // </div>

        <TableContainer component={Paper} style={{width: 1200, margin:'auto', marginTop:50}}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table" >
          <TableHead >
            <TableRow >
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Register As</StyledTableCell>
              <StyledTableCell align="center" >Phone</StyledTableCell>
              <StyledTableCell align="center">Password</StyledTableCell>
              <StyledTableCell align="center">Confirm Password</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.number}>
                <StyledTableCell component="th" scope="row">
                  {row.number}
                </StyledTableCell>
                <StyledTableCell align="center">{row.Name}</StyledTableCell>
                <StyledTableCell align="center">{row.Email}</StyledTableCell>
                <StyledTableCell align="center">{row.Register_As}</StyledTableCell>
                <StyledTableCell align="center" >{row.Phone}</StyledTableCell>
                <StyledTableCell align="center">{row.Password}</StyledTableCell>
                <StyledTableCell align="center">{row.Confirm_Password}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>

    )
}

export default Userdata;