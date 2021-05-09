import React from 'react'
import ReactDOM from 'react-dom'
import App from './Challenge_3_App'
import PokemonCard from './PokemonCard'


//.........................................................
// !st Challenge : Creating ordered list in JSX
ReactDOM.render(
    <>
    <h1>Challenge 1</h1>
    <h1>Roshan bishi Netflix series (ordered)</h1>
    <p>Here is a list of ordered Netflix series</p>
    <ol>
        <li>DARK</li>
        <li>Breaking Bad</li>
        <li>Peaky Blinder</li>
        <li>The Outpost</li>
    </ol>
    <br></br>
    </>
    ,document.getElementById('root-1')
);


//.............................................................
// 2nd Challenge : Showing current date and time in JSX
let TimeCurrent = new Date().toLocaleTimeString()
let DateCurrent = new Date().toLocaleDateString()
ReactDOM.render(
    <>
    <h1>Challenge 2</h1>
    <h1>This is Date and time </h1>
    <h2>{`Current Date is : ${DateCurrent}`}</h2>
    <h2>{`Current Time is : ${TimeCurrent}`}</h2>
    <br></br>
    </>
    ,document.getElementById('root-2')
);




//..............................................................
//Challenge : 3 
// Make page that show 'good morning' between 0:00 to 12:00 , 'good Afternoon' between 12:00 to 17:00, 'good evening' between 17:00 to 20:00 and then 'good night' between 20:00 to 0:00.
// Complete using Component system

ReactDOM.render(
<>
<App />
<hr />
</>,document.getElementById('root-3'));


//..................................................................
// challnge : 4 pokemon api

ReactDOM.render(
    <>
    <PokemonCard />
    </>,document.getElementById("root-4")
)