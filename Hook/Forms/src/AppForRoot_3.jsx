import React, { useState } from 'react'
import './App.css'


const AppForRoot_3 = () => {
    const [Data, setData] = useState({
        Name: '',
        Email: '',
        Password: ''
    });

    const takeData = event => {
        setData(prev => {
            // if (event.target.name === "Name") {
            //     return {
            //         Name: event.target.value,
            //         Email: prev.Email,
            //         Password: prev.Password
            //     }
            // }
            // else if (event.target.name === "Email") {
            //     return {
            //         Name: prev.Name,
            //         Email: event.target.value,
            //         Password: prev.Password
            //     }
            // }
            // else if (event.target.name === "Password") {
            //     return {
            //         Name: prev.Name,
            //         Email: prev.Email,
            //         Password: event.target.value
            //     }
            // }

            //All the above code is equilavent to below two lines
            return({
                ...prev,
                [event.target.name] : event.target.value
            })

        })
    }

    const submitMyData = (event) => {
        event.preventDefault();
    }


    //FOR SHOW THE DATA
    const giveNameData = (param) => {
        if (param !== "") {
            return (`Name is ${param}`)
        }
        else {
            return ("")
        }
    }
    const giveEmailData = (param) => {
        if (param !== "") {
            return (`Emaiil is ${param}`)
        }
        else {
            return ("")
        }
    }
    const givePasswordData = (param) => {
        if (param !== "") {
            return (`Password is ${param}`)
        }
        else {
            return ("")
        }
    }
    //END OF SHOWING DATA


    const showName = giveNameData(Data.Name)
    const showEmail = giveEmailData(Data.Email)
    const showPass = givePasswordData(Data.Password)

    return (
        <>
            <form onSubmit={submitMyData}>
                <div className="Container">
                    <h1>Handling Complex Input System</h1>
                    <input type="text" placeholder="Name" name="Name" onChange={takeData} />
                    <input type="text" placeholder="Email" name="Email" onChange={takeData} />
                    <input type="text" placeholder="Password" name="Password" onChange={takeData} />
                    <button type="submit">Submit</button>
                    <hr />
                    <h2>{showName}</h2>
                    <h2>{showEmail}</h2>
                    <h2>{showPass}</h2>
                </div>
            </form>
        </>

    )
}

export default AppForRoot_3;