import React, {useContext, useState} from 'react';
import "./accounts4.scss"; 

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer'; 
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import AddCard from './AddCard';


const Accounts4 = () => { 

    const [handle, setHandle] = useState(true);

    function createData(title, info, edit) {
        return { title, info, edit };
    }
    
    const rows = [createData('Payment cards', "Pay with new cards", "Add card")]
    
    const handleClick = () => {
        setHandle(false);
    }
   
  return (
    <div className="paymentTableContainer">
    {
        handle ?
        
    <TableContainer component={Paper} style={{overflowX:'hidden'}}>
       <div className="paymentDetailsMainContainer">
       <div className="paymentDetailsText">
           <div className="boldText">Payment details</div>
           <div className="smallText">Securely add or remove payment methods to make it easier when you book.</div>
       </div> 
        </div>
        <hr style={{ color: "gray", width: "95%", marginLeft: "18px" }} />
              
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
             <div onClick={handleClick} className="addCard">Add Card</div>
             <TableCell align="right"></TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
    :
        <AddCard />  }
   </div>
  )
}

export default Accounts4;
