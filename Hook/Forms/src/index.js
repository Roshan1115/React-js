import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AppRo0t2 from './AppForRoot_2'
import AppRoot3 from './AppForRoot_3'
import './index.css'

//Root-1
ReactDOM.render(<App/>, document.getElementById('root-1'))

//Root-2
ReactDOM.render(<AppRo0t2/>, document.getElementById('root-2'))

//Root-3
ReactDOM.render(<AppRoot3/>, document.getElementById('root-3'))
