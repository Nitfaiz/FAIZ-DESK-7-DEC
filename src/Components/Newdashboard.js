import React from 'react'
import Header from './Header'

function Newdashboard() {
  return (
    <div className='big-box d-flex' >
        <div className='left-box' style={{width:"5vw",backgroundColor:"blue",height:"100vh"}}></div>
        <div className='right-box' style={{width:"95vw",backgroundColor:"aqua",height:"100vh"}}> <Header/> 
        
        </div>

        
    </div>
  )
}

export default Newdashboard