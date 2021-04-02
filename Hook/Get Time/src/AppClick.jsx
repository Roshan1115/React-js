import React, { useState } from 'react'
import './App.css'

// useState is form Hook

const AppClick = () => {
    let [currTime, newTime] = useState(new Date().toLocaleTimeString())

    const GetcurrTime = () => {
        newTime(new Date().toLocaleTimeString())
    }

    return(
        <>
    <div className="Container">
        <h1>{currTime}</h1>
        <div className="btn-container">
            <button onClick={GetcurrTime}>Get Time</button>
        </div>
    </div>
        </>
    )
}

export default AppClick;