import React, {useContext} from 'react';
import "./accounts5.scss"; 
import { AuthContext } from "../../context/AuthContext";
import { Link } from 'react-router-dom';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer'; 
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 


const Accounts5 = () => { 

    const { user } = useContext(AuthContext); 
   
  return (
    <div className="privacyTableContainer">
    <TableContainer component={Paper} style={{overflowX:'hidden'}}>
       <div className="privacyDetailsMainContainer">
       <div className="privacyDetailsText">
           <div className="boldText">Privacy</div>
           <div className="smallText">Exercise your privacy rights and control how your data is used.</div>
       </div> 
        </div>
        <hr style={{color:"gray",width:"95%",marginLeft:"18px"}} />
     <Table aria-label="simple table">
     
       <TableBody> 
           <TableRow
             key={user.email}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell>
              Privacy settings
             </TableCell>
             <TableCell align="left" style={{width:"62%"}}>{user.email}<br />Select ‘Manage’ to change your privacy settings and exercise your rights using our request form.</TableCell>
             <TableCell align="right"></TableCell>
              <div className="manage"><Link to="/manage" style={{textDecoration:"none",color:"blue",fontWeight:"bold"}}>Manage</Link></div>
             <TableCell align="right"></TableCell>
           </TableRow> 
       </TableBody>
     </Table>
   </TableContainer>
   </div>
  )
}

export default Accounts5;
