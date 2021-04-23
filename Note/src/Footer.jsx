import React from 'react'

const Footer = () => {
  let year = new Date().getFullYear();
  return(
    <>
    <footer>
   <p>Developed by Roshan Bishi Copyright © {year}.</p>
    </footer>
    </>
  )
}
export default Footer;