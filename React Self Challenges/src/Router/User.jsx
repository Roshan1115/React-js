import React from 'react'
import { useLocation, useParams } from 'react-router';

const User = () => {
  const {firstName,lastName} = useParams();    // the name must be same as in path.

  const urlLocation = useLocation();
  
  return <>
  <h1>Hello <span style={{color: 'red'}}>User is</span><span style={{color:'blue'}}> {firstName} {lastName}</span>.</h1>
  <h2>you are in <span style={{color: 'blue'}}>{urlLocation.pathname}</span></h2>
  </>
}
export default User;