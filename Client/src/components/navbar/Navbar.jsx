// import { useContext } from "react"
// import "./navbar.css"
// import { Link } from "react-router-dom"
// import { AuthContext } from "../../context/AuthContext"
// import { RiDashboardFill, RiDivideFill } from "react-icons/ri";
// import Avatar from '@mui/material/Avatar';

// const Navbar = () => {
//   const { user } = useContext(AuthContext); 
//   // console.log("USER:", JSON.stringify(user));
//   return ( 
//     <div className="navbar">
//       <div className="navContainer">
//         <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
//           <span className="logo">lamabooking</span>
//         </Link>
//         {
//           user.isAdmin ? <span>{user.username}
//             <Link to="/admin"> 
//               <RiDashboardFill />
//             </Link>
//             </span>
//           :
//             user ? <span> {user.username}
//             <Avatar
//               alt="Remy Sharp"
//               src={user.img}
//               sx={{ width: 56, height: 56 }}
//             />
//             </span>
//           :
//           (<div className="navItems">
//           <button className="navButton">Register</button>
//           <button className="navButton">Login</button>
//           </div>
//           )}
//       </div>
//     </div>
//   )
// }

// export default Navbar




import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { BiSearch, BiHeart } from "react-icons/bi";
import { SlHandbag } from "react-icons/sl";
import { RiDashboardFill } from "react-icons/ri"; 
import Avatar from '@mui/material/Avatar';
import { AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const { user } = useContext(AuthContext); 
  const navigate = useNavigate();
  // console.log("USER:", JSON.stringify(user));

  const handleClickRegister = () => {
    navigate("/registration");
  }

  const handleClickSignIn = () => {
    navigate("/loginComponent");
  }
   
  return (
    <>
      {" "} 
      <div className="nav-cont" id="navid">
        <nav>
          <img src="" style={{ width: "100px" }} alt="" />
          <ul className="home-opt">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link> 
          </ul>

          <ul>
          {/* {
             user.isAdmin ? <Link
            to={'/admin'}
            >
              <RiDashboardFill />
            </Link> :null

          }  */}
              {user ? (
              <Link to="/setings">
              <Avatar
                alt="Travis Howard"
                src={user.img} 
              />
              </Link>
              ) : (
                <div className="registerAndSignIn">
                  <div className="registerAndSignInText" onClick={handleClickRegister}>Register</div>    
                  <div className="registerAndSignInText" onClick={handleClickSignIn}>Sign in</div>     
                </div>
              )}
            <Link to={"/"}>
              <BiHeart />
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

