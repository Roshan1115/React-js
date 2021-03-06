import React, { useState } from 'react'
import "./App.css"
import ItemComponent from './item'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const App = () => {

  const [item, setitem] = useState("")
  const [itemArr, setitemArr] = useState([])

  const takeItem = (event) => {
    setitem(event.target.value)
  }

  //store the data in an state array
  const storeItem = () => {
    setitemArr((prev) => {
      return [...prev, item]
    })
    setitem("")
  }

  //this function is called when the delete button is clicked fro the component
  // let deletStyle = {}
  // const deleteItem = (id) => {
  //   deletStyle={
  //     textDecoration: "line-through"
  //   }
  //   console.log("clicked");
  // }

  return(
    <>
  <div className="container">
    <div className="h1-container">
      <h1>To Do List 2</h1>
    </div>
    <div className="addlist-container">
      <input type="text" name="Add_item" placeholder='Add an item' value={item} onChange={takeItem} />

      <Fab color="primary" aria-label="add" onClick={storeItem}>
        <AddIcon />
      </Fab>

    </div>
    <div className="working-conatainer">
      {itemArr.map((currValue, index) => {
        return(
          <ItemComponent
        key={index} 
        text={currValue} 
       />
        )
      })}
    </div>
  </div>
    </>
  )
}

export default App;