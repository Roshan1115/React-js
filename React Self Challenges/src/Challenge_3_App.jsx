import React from 'react';
import './Challenge_3.css' // for challenge 3

function App() {
    let curdate = new Date().getHours()
    let Greeting = '';
    let dynamic_css_style = {};

    if (curdate >= 0 && curdate < 12) {
        Greeting = 'Good Morning Roshan'
        dynamic_css_style = {
            color: 'green'
        }
    }
    else if (curdate >= 12 && curdate < 17) {
        Greeting = 'Good Afternoon Roshan'
        dynamic_css_style = {
            color: '#f59e33'
        }
    }
    else if (curdate >= 17 && curdate < 20) {
        Greeting = 'Good Evening Roshan'
        dynamic_css_style = {
            color: '#ff859a'
        }
    }
    else if (curdate >= 20) {
        Greeting = 'Good Night Roshan'
        dynamic_css_style = {
            color: 'blue'
        }
    }

    return(
        <>
        <h1>Challenge 3</h1>
        <div className="Container">
        <div className='h1-container'>
        <h1>Hello, <span style= {dynamic_css_style}>{Greeting}</span></h1>
        </div>
        </div>
        <br/>
        </>
    )
}
export default App;