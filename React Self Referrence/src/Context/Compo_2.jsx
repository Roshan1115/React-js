import React from 'react'
import { firstname, lastname } from './AppContext'

const Comp2 = () => {

  // Here comes the thrid step to use context.
  return(
    <>
    <firstname.Consumer>
      {(fname) => { return (
        <lastname.Consumer>
          {(lname) => {
            return(
              <>
              <h2>Inside the innermost component.</h2>
              <h2> Hello there mu name is {fname} {lname}.</h2>
              </>
            )
          }}
        </lastname.Consumer>
      )}}
    </firstname.Consumer>
    </>
  )
 
}

export default Comp2;