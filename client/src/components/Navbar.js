import styled from 'styled-components'
import {FaAlignLeft,FaUserCircle,FaAngleDown} from 'react-icons/fa'
import { useState } from 'react'


 
const Navbar = ({toggleMenu}) => {
  const [showLogout,setShowLogout] = useState(false)
  const toggleLogOUt=()=>{
    setShowLogout(!showLogout)

  }

  const doLogout=()=>{
    console.log("Logiut clicked")
    toggleLogOUt()
  }
  return (
    <Wrapper>
        <FaAlignLeft  className='menu' onClick={toggleMenu} />
        <h3>Dashboard</h3>
        <button className='btn center' onClick={toggleLogOUt}><FaUserCircle/> shakira <FaAngleDown/></button>
        <button className={`btn btn-hipster logout ${showLogout && 'hide'}`} onClick={doLogout}>Logout</button>
    </Wrapper>
  )
}



const Wrapper= styled.div`

display:flex;
justify-content:space-between;
align-items:center;

padding:20px;
height:100px;
background:white;

position:relative;

/* box-shadow: var(--shadow-1); */
/* @media (min-width: 992px) {
   position:fixed;
   left:200px; 
} */




.menu{
    color:var(--primary-500);
    height:40px;
    width:40px;
    cursor:pointer;
}
.center{
   display: grid;
   align-items:center;   
   grid-template-columns:20px auto 10px;  
}

.logout{
    position:absolute;
    top:80px;
    right:20px
}
.hide{
  display:none
}
`
export default Navbar