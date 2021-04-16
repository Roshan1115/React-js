import React, { useState } from 'react'
import './App.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



const ItemComponent = (props) => {
  const [line, setline] = useState(false)

  const deletStyle = { textDecoration: line? "line-through" : "none" }

  const createLine = () => setline(true)

  if(props.text !== ""){
    return(
      <>
    <div className="item">
          <IconButton aria-label="delete" onClick={createLine}>
              <DeleteIcon />
          </IconButton>
          <div className="list-text">
            <h2 style={deletStyle}>{props.text}</h2>
          </div>
      </div>
      </>
    )
  }
  else{
    return <> </>;
  }
}

export default ItemComponent;