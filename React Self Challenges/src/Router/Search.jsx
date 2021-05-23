import React, { useState } from 'react'

const Search = () => {

  //.............css styling object inline metthode................
  const mainDiv = {
    width: '100%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  const inputStyle = {
    fontSize: '2rem',
    textAlign: 'center'

  }

  const imgStyle = {
    height: '500px',
    width: '700px'
  }
  //........... END OF STYLING.....................



  const [searchImg, setSearchImg] = useState("");
  const inputEvent = (event) => {
    setSearchImg(event.target.value);
  }

  //..........SEARCH RESULT....................
  const Sresult = (props) => {
    const imageLink = `https://source.unsplash.com/500x700/?${props.imgName}`

    return(
      <>
        <img style={imgStyle}
        src={imageLink}
        alt="Search result."
        />
      </>
    )
  }
  //..........END SEARCH RESULT....................


  return(
    <>
    <div style={mainDiv}>
        <input style={inputStyle} 
        type='text'
        placeholder='Search'
        onChange={inputEvent}
        value={searchImg}
        />
        
        { searchImg===""? null : <Sresult imgName={searchImg} /> }
        
    </div>
    </>
  )
}

export default Search;