import React, { useState } from 'react'
import './App.css'

// useState is form Hook

const App = () => {

    let [count, setCount] = useState(0)

    const IncreatementNumb = () => {
        setCount(++count)
    }

    return(
        <>
    <div className="Container">
        <h1>{count}</h1>
        <div className="btn-container">
            <button onClick={IncreatementNumb}>Click Me</button>
        </div>
    </div>
        </>
    )
}

export default App;