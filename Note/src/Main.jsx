import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Note from './Note'


const Main = () => {

  // hooks.....................................................
  const [input, setInput] = useState({
    title: "",
    content: ""
  });
  const [noteArr, setNoteArr] = useState([]);
  const [expand, setExpand] = useState(false);
  // end of hooks .............................................

  // take input into the state  
  const takeInput = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  // Add note to the page
  const addNote = () => {
    if (input.title === "" || input.content === "") {
      return;
    }
    setNoteArr((prev) => {
      return [...prev, input]
    })
    setInput({
      title: "",
      content: ""
    })
  }

  //change focus from title to content field 
  const changeFocus = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const inputContent = document.querySelector("#content")
      inputContent.focus();
    }
  }

  // Delete note
  const deleteNote = (id) => {
    setNoteArr((prev) => {
      return prev.filter((curValue, index) => {
        return index !== id;
      })
    })
  }

  const expandFlield = () => {
    setExpand(true);
  }
  const Compress = () => {
    setExpand(false)
  }

  return (
    <>
      <div className="main_container" onDoubleClick={Compress}>
        <div className="input_container">
          <div className='input_holder'>

            {expand ?
              <>
                <input type="text" id="title" placeholder='Tittle' name="title" value={input.title} onChange={takeInput} onKeyDown={changeFocus} />
                <textarea placeholder='Write note' id="content" name="content" value={input.content} onChange={takeInput} />
                <Tooltip title="Add" aria-label="add" id="myAdd_btn" onClick={addNote}>
                  <Fab color="primary" >
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </>
              :
              <>
                <input type="text" id="title" placeholder='Write Something' name="title" onClick={expandFlield} />
              </>}

          </div>
        </div>

        <div className="NoteList_container">

          {noteArr.map((currentValue, index) => {
            return (<Note
              key={index}
              id={index}
              title_h3={currentValue.title}
              content_p={currentValue.content}
              deleteParticular={deleteNote}
            />)
          })}

        </div>
      </div>
    </>
  )
}
export default Main;