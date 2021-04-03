import React, { useState } from 'react'
import './App.css'

// This component is controlled component 
const App = () => {
    const [InpValue, setInpValue] = useState("")
    const [Fname, Fsetvalue] = useState("")
    // let FinalValue = ""
    const inpEvent = (e) => {
        // console.log(e.target.value);
        setInpValue(e.target.value)
    }
    const SubmitData = () => {
        Fsetvalue(InpValue)
    }
    return(
        <>
    <div className="Container">
        <h1>This is my first form in React ☺️</h1>
        <input type="text" placeholder="Name" onChange={inpEvent}/>
        <button onClick={SubmitData}>Submit</button>
        <h4>{InpValue}</h4>
        <hr/>
        <h2>{Fname}</h2>
    </div>
        </>

    )
}

export default App;