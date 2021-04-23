import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';



const Main = () => {



  return (
    <>
      <div className="main_container">
        <div className="input_container">
          <div className='input_holder'>
            <input type="text" placeholder='Tittle' />
            <textarea placeholder='Write note' />
            <Tooltip title="Add" aria-label="add" id="myAdd_btn">
              <Fab color="primary" >
                <AddIcon />
              </Fab>
            </Tooltip>
          </div>
        </div>

        <div className="NoteList_container">

          <div className='NoteList'>
            <h3>Title</h3>
            <p>this is my note taken here.I am witting this to create my own note taking app.pieihshhehhigweijwpeirjw;or ierw pwier g pwir g qr pqirie pre eriewhh prwer prh </p>
            <Tooltip title="Delete">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
         
        </div>
      </div>
    </>
  )
}
export default Main;