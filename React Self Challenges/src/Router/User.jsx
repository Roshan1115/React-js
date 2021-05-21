import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router';

const buttonStyle = {
  fontSize: '2rem',
  margin: '0rem 2rem'
}

const User = () => {
  const {firstName,lastName} = useParams();    // the name must be same as in path.

  const urlLocation = useLocation();
  
  const history = useHistory();
  // location are also inclluded in history but it is not recommended to use it from history as they are mutable.


  return <>
  <h1>Hello <span style={{color: 'red'}}>User is</span><span style={{color:'blue'}}> {firstName} {lastName}</span>.</h1>
  <h2>you are in <span style={{color: 'blue'}}>{urlLocation.pathname}</span></h2>

  <button style={buttonStyle} onClick={()=> history.goBack()}>Go Back</button>
  
  <button style={buttonStyle} onClick={()=> history.push('/')}>Go Home (/)</button>
  </>
}
export default User;