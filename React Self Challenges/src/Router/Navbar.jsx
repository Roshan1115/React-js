import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const linkStyle = {
    padding: '1rem', 
    color:"white",
    fontSize: '2rem'
    }
  return(
    <>
    <div style={{backgroundColor : 'grey'}}>
    <h1>React-Routing-Dom</h1>
    <h1>This is navbar menu using react routing.</h1>
    <Link style={linkStyle} to="/about">About</Link>
    <Link style={linkStyle} to="/contact">contact</Link>
    <Link style={linkStyle} to="/user/Default/Default">User</Link>
    <Link style={linkStyle} to='/search'>Search</Link>

    </div>
    </>
  )
}

export default Navbar;