import React, { useState } from 'react'

// from material ui 
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import './App.css'

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
    <div className="root-3-Container">
        <h1>{count}</h1>
        <div className="btn3-container">
        <Tooltip title="Add">
        <Button variant="contained" size="large" onClick={Increament} className="btn_green" >
              <AddIcon />
            </Button>
            </Tooltip>
            <Tooltip title="Delete">
          <Button variant="contained" size="large" onClick={Decreament} className="btn-red" >
              <RemoveIcon />
            </Button>
            </Tooltip>
        </div>
    </div>
        </>
    )
}

export default App;