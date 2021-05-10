import React from 'react'
import About from './About'
import Contact from './Contact'
import {Route, Switch} from 'react-router-dom'

const AppRout = () => {

  const errorCom = () => {
    return(
      <h1>OOps ! you have inputed wrong url.</h1>
    )
  }

  return(
    <>
     <h1> This is routing section here.</h1>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>

    <Switch>
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' component={Contact} />
    <Route component={errorCom} />
    </Switch>
    </>
  )
}
export default AppRout;