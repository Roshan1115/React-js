import React, { useState } from 'react'

const AppRoot_2 = () => {
    let [initbg, finalbg] = useState("rgb(121 81 118)")
    let [name, finalname] = useState("Click Me")
    const bgChange = () => {
        finalbg("rgb(165 158 77)")
        finalname("Hey Bhagwan 😂")
    }
    return( 
        <>
        <div className="divAppRoot-2" style={{backgroundColor: initbg}}>
        <div className="Container">
        <h1 className="roo_2_h1">This is Events (Root-2)</h1>
        <button onClick={bgChange} style={{fontWeight: "Bold"}}>{name}</button>
        </div>
        </div>
        </>
    )
}

export default AppRoot_2;