import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';



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
      </div>
    </>
  )
}
export default Main;