import React from 'react'
import { useParams } from 'react-router';

const User = () => {
  const {firstName,lastName} = useParams();    // the name must be same as in path.
  
  return <h1>Hello <span style={{color: 'red'}}>User is</span><span style={{color:'blue'}}> {firstName} {lastName}</span>.</h1>
}
export default User;