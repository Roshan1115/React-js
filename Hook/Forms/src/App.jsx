import React, { useState } from 'react'
import './App.css'

// This component is controlled component 
const App = () => {
    const [InpValue, setInpValue] = useState("")
    const [Fname, Fsetvalue] = useState("")
    
    const inpEvent = (e) => {
        setInpValue(e.target.value)
    }
    const SubmitData = (e) => {
        e.preventDefault();
        Fsetvalue(InpValue);
    }
    return(
        <>
        <form onSubmit={SubmitData}>
    <div className="Container">
        <h1>This is my first form in React ☺️</h1>
        <input type="text" placeholder="Name" onChange={inpEvent}/>
        <button type="submit">Submit</button>
        <h4>{InpValue}</h4>
        <hr/>
        <h2>{Fname}</h2>
    </div>
        </form>
        </>

    )
}

export default App;