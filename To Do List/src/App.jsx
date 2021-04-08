import React, { useState } from 'react'
import "./App.css"
import ItemComponent from './item'

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
  const deleteItem = (id) => {
    setitemArr((prevValue) => {
      return prevValue.filter((element, index) => {
        return index !==id
      })
    })
  }

  return(
    <>
  <div className="container">
    <div className="h1-container">
      <h1>To Do List</h1>
    </div>
    <div className="addlist-container">
      <input type="text" name="Add_item" placeholder='Add an item' value={item} onChange={takeItem} />
      <button onClick={storeItem} id="add">+</button>
    </div>
    <div className="working-conatainer">
      {itemArr.map((currValue, index) => {
        return(<ItemComponent
        key={index} 
        id={index}
        onDelete={deleteItem}
        text={currValue} />)
      })}
    </div>
  </div>
    </>
  )
}

export default App;