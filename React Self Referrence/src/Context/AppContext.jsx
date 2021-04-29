import React, { createContext } from 'react'
import Comp1 from './Compo_1'

// first step for using context
const firstname = createContext();
const lastname = createContext();

const App = () => { 

  //second step
  return(
    <firstname.Provider value="Roshan">
      <lastname.Provider value="Bishi">
        <Comp1 />
      </lastname.Provider>
    </firstname.Provider>
  )
}

export default App;
export { firstname, lastname };