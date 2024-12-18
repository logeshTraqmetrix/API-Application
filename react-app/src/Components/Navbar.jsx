import React from 'react'

const Navbar = () => {
  return (
    <div style={{
      height:"8vh",
      backgroundColor:"white",
      position:'fixed',
      width:'100vw',
      top:0,
      display:'flex',
      alignItems:'center',
      paddingLeft:20,
      boxShadow:'0 4px 6px rgba(0,0,0,0.1)',
      fontFamily: "'Arial', sans-serif"
    }}>
      <div >
        Api Application
      </div>
    </div>
  )
}

export default Navbar