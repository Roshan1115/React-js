import React, { useState } from 'react'
import './App.css'

// from material ui 
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const App = () => {
  let [count, setcount] = useState(0)

  const Increament = () => {
    setcount(++count)
  }
  const Decreament = () => {
    if(count === 0){
      alert("The limit zero is already there. irst increament the number")
      return
    }
    setcount(--count)
  }

    return(
        <>
    <div className="Container">
        <h1>{count}</h1>
        <div className="btn-container">
            <button onClick={Increament} >
              <AddCircleOutlineIcon />
            </button>
        </div>
        <div className="btn-container">
            <button onClick={Decreament} >
              <HighlightOffIcon />
            </button>
        </div>
    </div>
        </>
    )
}

export default App;