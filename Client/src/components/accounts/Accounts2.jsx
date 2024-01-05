import React, {useContext} from 'react';
import "./accounts2.scss";
import { AuthContext } from "../../context/AuthContext";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer'; 
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 


const Accounts2 = () => { 

    function createData(title, info) {
        return { title, info };
    }
    
    const rows =[
            createData('Currency', "Rs. Indian rupee" ),
            createData('Language', "English"), 
            createData('Accessibility requirements', "Filter out properties that don't meet your needs") 
        ]
   
  return (
    <div className="preferenceTableContainer">
    <TableContainer component={Paper} style={{overflowX:'hidden'}}>
       <div className="preferenceDetailsMainContainer">
       <div className="preferenceDetailsText">
           <div className="boldText">Preferences</div>
           <div className="smallText">Change your language, currency and accessibility requirements.</div>
       </div> 
        </div>
        <hr style={{color:"gray",width:"95%",marginLeft:"18px"}} />
              
     <Table aria-label="simple table">
     
       <TableBody>
         {rows.map((row) => (
           <TableRow
             key={row.title}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell>
               {row.title}
             </TableCell>
             <TableCell align="left">{row.info}</TableCell>
             <TableCell align="right"></TableCell>
             <TableCell align="right"></TableCell>
             <TableCell align="right"></TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   </div>
  )
}

export default Accounts2;
