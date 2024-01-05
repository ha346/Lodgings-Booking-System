import React,{useContext} from 'react';
import "./saveMoney.scss";
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const SaveMoney = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='mainSaveMoneyContainer'>
        <div className="saveMoneyContainer">
            <div className="saveMoneyDesc">
                <div className='saveMoneyDesc1'>Sign in, save money</div>
                <div className='saveMoneyDesc2'>You could save 10% or more at this property when you sign in</div>
          {user ?
            <div style={{ fontWeight:"bold", fontSize:"18px", marginTop:"15px" }}>
                Welcome &nbsp; 
              {user.username} !
            </div>
            : 
            <div className='saveMoneyDesc3'>
              <Link to="/loginComponent" style={{textDecoration:"none"}}><div className="saveMoneySignIn">Sign in</div></Link> 
              <Link to="/registration" style={{textDecoration:"none"}}><div className='saveMoneyAccount'>Create an account</div></Link>    
            </div>
          }
            </div>
            <div className="saveMoneyImg">
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/100x100/215283468.png?k=adfd9a957bdca3a78b3cc74855f3f6b13264e773871bb91b90a7542173c0b450&o=" alt="" />
            </div>      
      </div>
    </div>
  )
}

export default SaveMoney
