import React from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from "./Loader"

function Thirdpage() {
  const gotoHome = useNavigate();
  const handleGetstarted =()=>{
gotoHome('/getstarted')
  }
  return (

    <div className='container' style={{display:"flex" ,alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"25vh"}}>
      <div>
      <h1 style={{textAlign:"center"}} className='thank-you'>
      Thank you for choosing Faizdesk!
      </h1>
      </div>
       <div>
      <p style={{textAlign:"center"}}>Our product is trusted by more than 50,000+ businesses who care about delivering great support to their customers.</p>
      &nbsp;
      <Loader />
      <p  style={{display:"flex", alignItems:"center",justifyContent:"center"}}>Your Faizdesk Account is Ready</p>
      </div>
  <div>
      <button className="free-trial" style={{backgroundColor:" #11344D"}} onClick ={handleGetstarted} >
      
        GET STARTED
        </button>
        </div>
  
    </div>
  )
}

export default Thirdpage