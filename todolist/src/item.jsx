import React from 'react'
import './App.css'

const ItemComponent = (props) => {

  return(
    <>
  <div className="item">
        <button onClick={() => {
          props.onDelete(props.id)
        }}>X</button>
        <div className="list-text">
          <h2>{props.text}</h2>
        </div>
    </div>
    </>
  )
}

export default ItemComponent;