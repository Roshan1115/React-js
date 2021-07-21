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
    const allInput = { id : new Date().getTime().toString(), actualItem : item}
    setitemArr((prev) => {
      return [...prev, allInput]
    })
    setitem("")
  }

  //this function is called when the delete button is clicked from the component
  const deleteItem = (id) => {
    setitemArr((prevValue) => {
      return prevValue.filter((element) => {
        return element.id !==id
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
      {itemArr.map((currValue) => {
        return(<ItemComponent
        key={currValue.id} 
        id={currValue.id}
        onDelete={deleteItem}
        text={currValue.actualItem} />)
      })}
    </div>
  </div>
    </>
  )
}

export default App;