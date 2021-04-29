import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Heading from './Heacing_component'   // For Component Tutorial
import MyPara from './Para'     // For Component Tutorial
import MyList from './List'     // For Component Tutorial
import App from './App'     // For Master Component Tutorial
import AppBootstrap from './Appforbootstrap'    // for bootstra in react
import AppForContext from './Context/AppContext'   // for context (hook)



// In react -v 16 and above it is possible to pass multiple JSX element in to a single element using array element and a <div> tag. Make sure to give comma if the JSXs are in array
ReactDOM.render( 
    [
    <h1>Hello World!</h1>,
    <p>This is roshan here.</p>,
    <h2>This is another h2 heading.</h2>,
  <hr/>
    ], 
    document.getElementById('root-1'));


// using React.Fragment to show the JSX element without using arrey and dispatchEvent. This follow the property of Array ie, it will not create an additional div element inside the root.
// React.Fragment consumes less memory as well.
// sohotcut of React.Fragment is "<> ..... </>" 
ReactDOM.render( 
    <>
    <h1>Hello World!</h1>
    <p>This is roshan here.</p>
    <h2>This is another h2 heading.</h2>
    <hr/>
    </>, 
    document.getElementById('root-2'));


// JSX Expression in React  (Curli braces '{}' )
const Fname = 'Roshan'
const Sname = 'Bishi'

ReactDOM.render(
    <>
     <h1>
        my first name is {Fname} and the second name is {Sname}
     </h1>
     <h2>A random number : {Math.random()}
     </h2>
     <hr/>
    </>
    ,document.getElementById('root-3')
    );

// JSX Expression Contatenation
ReactDOM.render(
    <>
        <h1>
        This is name with Contatenation : {Fname + " " + Sname}
        </h1>
        <hr/>
    </>
    ,document.getElementById('root-4')
);


// JSX Attribute and some CSS Styling
const img1 = "https://source.unsplash.com/random//400x300";
const img2 = "https://source.unsplash.com/random//400x301";
const img3 = "https://source.unsplash.com/random//400x299";
const img4 = "https://source.unsplash.com/random//400x302";
const myWebLink = "https://web7-project.herokuapp.com"

ReactDOM.render(
    <>
    <h1>JSX Arritbute. Click below line and you can edit</h1>
    <h2 contentEditable="true">My name is Roshan</h2>

    <div className="container">
    <h1 className = "My-heading">My Image Cotainer</h1>
    <img src = {img1} alt ="my myself" className="My-image" />
    <img src = {img2} alt ="my myself" className="My-image"/>
    <img src = {img3} alt ="my myself" className="My-image"/>

    <a href = {myWebLink} target="_blank" rel="noreferrer">
    <img src = {img4} alt ="my myself" className="My-image"/>
    </a>
    </div>
    <hr/>
    </>
    ,document.getElementById('root-5')
);
    

// Inline CSS in JSX
const ExampleObj = {
    color: 'red',
    textDecoration: 'underline',
    textAlign: 'center'
}

ReactDOM.render(
    <>
    <h1 style={{color: 'blue', textDecoration: 'underline', textAlign: 'center'}}>This is first example fo inline CSS.</h1>

    <h2 style={ExampleObj} >This is second example of inline CSS.</h2>
    <hr/>
    </>
    ,document.getElementById('root-6')
);


// Component Tutorial
ReactDOM.render(
    <>
    <Heading />
    <MyPara />
    <MyList />
    <hr/>
    </>
    ,document.getElementById('root-7')
);


// Bringing element through master component
ReactDOM.render(
    <>
    <h1>This is called by a master component (App.jsx)</h1>
    <App/> 
    <hr/>
    </>
    , document.getElementById('root-8'));


// Map function in js 
const arr = [' roshan', ' bishi', ' this', ' is', ' a', ' array']
let newArr = arr.map(  (currentValue, indexValue) => {
    return indexValue + " : " + currentValue + ' YO  ';
})
ReactDOM.render(
    <>
    <h1>{arr}</h1>
    <h1>{newArr}</h1>
    <hr/>
    </>, document.getElementById('root-9')
)


//Array destructuring in ES6 js
const ProLang = ['js', 'python', 'c', 'c++', 'java']
let [first, second, third, forth, fifth] = ProLang;
let [firstElement,,,,LastElement] = ProLang;
ReactDOM.render(
    <>
    <h1>Array Destructuring in ES6 js</h1> 
    <h1>{first}</h1>
    <h1>{second}</h1>
    <h1>{third}</h1>
    <h1>{forth}</h1>
    <h1>{fifth}</h1>
    <br/>
    <h1>{firstElement}</h1>
    <h1>{LastElement }</h1>
    <hr/>
    </>,document.getElementById('root-10')
)


// Spread Operator "..." in Array
// The index number of Fullname's element is added to the result arrau "BioData"
const Fullname = ['Roshan', 'Bishi']
const BioData = [19, ...Fullname, 'Male']

const Games = ['IGI', 'Call Of Duty', 'GTA-5']
const [firstele, ...remaining] = Games
ReactDOM.render(
    <>
    <h1>spread operator "..." in Array</h1>
    <h1>{BioData[0]} {BioData[1]} {BioData[2]} {BioData[3]}</h1>
    <h1>{firstele}, {remaining[0]}, {remaining[1]}</h1>
    <hr/>
    </>,document.getElementById('root-11')
)


//Spread operator "..." in Object
const fullnameOnj = {
    fname: 'Roshan',
    lname: 'Bishi'
}
const BioDataobj = {
    age: 19,
    ...fullnameOnj,
    gender: 'male'
}
ReactDOM.render(
    <>
    <h1>spread operator "..." in object</h1>
    <h1>{BioDataobj.age} {BioDataobj.fname} {BioDataobj.lname} BioDataobj.gender </h1>
    <hr/>
    </>,document.getElementById('root-12')
)


// Bootstrap use in react
ReactDOM.render(
    <>
    <h1>Bootstrap use in react.</h1>
    <AppBootstrap/>
    <hr/>
    </>,document.getElementById("root-13")
)


// Context use
ReactDOM.render(
    <>
    <h1>This is for context use tutorial.</h1>
    <AppForContext />
    <hr/>
    </>,document.getElementById("root-14")
)