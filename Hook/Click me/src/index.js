import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AppRoot2 from './AppRoot-2'
import AppRoot3 from './App_root_3'
import './index.css'

//Root
ReactDOM.render(<App/>, document.getElementById('root'))

//Root-2 (Events)
ReactDOM.render(<AppRoot2/>, document.getElementById("root-2"));

//Root-3  increament and decreatment
ReactDOM.render(<AppRoot3/>, document.getElementById("root-3"));