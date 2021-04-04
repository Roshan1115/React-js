import React, { useState } from 'react'
import './App.css'


//name = Name Data
// password = user password 

const AppForRoot_2 = () => {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("")

    //for submit data we create another two hook state 
    const [subname, setsubname] = useState("")
    const [subpassword, setsubpassword] = useState("")


    const takeName = (event) => {
        setname(event.target.value)
    }
    const takePassword = (event) => {
        setpassword(event.target.value)
    }
    const submitMyData = (event) => {
        setsubname(name)
        setsubpassword(password)
        event.preventDefault();
    }
    const giveNameData = (param) => {
        if (param !== ""){
            return(`Name is ${param}`)
        }
        else{
            return("")
        }
    }
    const givePassData = (param) => {
        if (param !== ""){
            return(`Password is ${param}`)
        }
        else{
            return("")
        }
    }

    const showName = giveNameData(subname)
    const showPassword = givePassData(subpassword)

    return(
        <>
        <form onSubmit={submitMyData}>
    <div className="Container">
        <h1>Enter Name And Password below !</h1>
        <input type="text" placeholder="Name" onChange={takeName}/>
        <input type="text" placeholder="Password" onChange={takePassword}/>
        <button type="submit">Submit</button>
        <hr/>
        <h2>{showName}</h2>
        <h2>{showPassword}</h2>
    </div>
        </form>
        </>

    )
}

export default AppForRoot_2;