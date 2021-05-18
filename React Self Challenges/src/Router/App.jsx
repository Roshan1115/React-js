import React from 'react'
import About from './About'
import Contact from './Contact'
import User from './User'
import {Route, Switch} from 'react-router-dom'


const AppRout = () => {

  const errorCom = () => {
    return(
      <h1>This is the default url.</h1>
    )
  }


  // we can even yse render methode or component methode
  // render methode serve the component only once and the compo stays in user browser
  // conponent methode serve the conponent every time user request.

  return(
    <>
     <h1> This is routing section here.</h1>
    <Switch>
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' render={() => <Contact name="Roshan" />} /> 
    <Route path='/user/:firstName/:lastName' component={User} />
    <Route component={errorCom} />
    </Switch>
    </>
  )
}
export default AppRout;