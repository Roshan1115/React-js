import React from 'react'
import './App.css'

const IndSlot = (props) => {
    let {x,y,z} = props;
    if(x===y && y===z){
        return(
            <>
        <h1>{x} {y} {z}</h1>
        <h2 style={{paddingBottom: "10px"}}>Hurrey !...Matching</h2>
        <hr />
            </>
        );
    }
    else{
        return(
            <>
        <h1>{x} {y} {z}</h1>
        <h2 style={{paddingBottom: "10px"}}>Upsss.....Noot Matching</h2>
        <hr />
            </>
        )
    }
}

const App = () => {
    return(
        <>
    <div className="Heading-container">
        <h1 className="heading">WELLCOME TO ROSHAN'S <span className="sm">SLOT MACHINE</span></h1>
    </div>
    <div className="sm-container">
        <IndSlot x="🍊" y="🍊" z="🍊"/>
        <IndSlot x="🍊" y="🍌" z="🍊"/>
        <IndSlot x="🍒" y="🍎" z="🍍"/>
        <IndSlot x="🍌" y="🍌" z="🍌"/>
    </div>
        </>
    )
}

export default App;
