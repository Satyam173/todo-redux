import React from 'react'

function Footer() {
    let footerStyle = {
        position:"absolute",
        top:"100vh",
        width:"100%"
    }
  return (
    <footer className=" bg-dark text-light" style={footerStyle}>
    <p className='py-3 text-center mt-3'>Copyright</p>
  </footer>
  )
}

export default Footer