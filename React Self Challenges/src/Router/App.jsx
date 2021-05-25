import React from 'react'
import About from './About'
import Contact from './Contact'
import User from './User'
import Search from './Search'
import {Route, Switch, Redirect} from 'react-router-dom'


const AppRout = () => {
 
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
    <Route exact path='/search' component={Search} />


    {/* Now with redirect methode we don't need to make error page. If user type something wrond in urll bar then it will redirected  */}

    <Redirect to='/' />
    </Switch>
    </>
  )
}
export default AppRout;