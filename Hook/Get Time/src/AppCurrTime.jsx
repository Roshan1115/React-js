import React,{useState} from 'react'
import './App.css'

const AppCurrTime = () => {
    // let currTime = new Date().toLocaleTimeString();
    let [currTime, newTime] = useState(new Date().toLocaleTimeString())
    const UpdateTime = () => {
        newTime(new Date().toLocaleTimeString())
    }
    setInterval(UpdateTime, 1000)
    return(
        <>
        <div className="Container">
            <h1>{currTime}</h1>
        </div>
        </>
    )
}

export default AppCurrTime;