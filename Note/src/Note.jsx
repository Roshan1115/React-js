import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


const Note = (props) => {

  return (
    <>
      <div className='NoteList'>
        <h3>{props.title_h3}</h3>
        <p>{props.content_p}</p>
        <Tooltip title="Delete" onClick={() => {
          props.deleteParticular(props.id)
        }}>
          <IconButton aria-label="delete" >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </>
  )
}

export default Note;

//onClick={props.deleteParticular(props.id)}