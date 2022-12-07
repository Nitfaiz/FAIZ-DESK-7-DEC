import React from 'react'
import { FcMindMap } from "react-icons/fc"
import { AiOutlineClose } from "react-icons/ai"
import { useNavigate } from "react-router-dom";




function Getstarted() {

    // used To navigate On Dashboard   //
  
    const gotoHome = useNavigate();
    const auth = () => {
      gotoHome("/dashboard");
    }
    return (

        <div className='container' style={{ display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "15vh"}}>

            <div className='close-btn'> <span> <FcMindMap style={{fontSize:"30px"}}/> &nbsp; Faizdesk Support Desk</span> 
            <button onClick={auth} style={{border:"none",backgroundColor:"white"}} > Close <AiOutlineClose /></button>
            
            </div>

            <div style={{ marginTop: "1.8vw" }}>
                <h3 className='welcome-check'>Welcome, Check.</h3>

                <p>Great to have you on board! Let's get you started in three simple steps.</p>
            </div>



            <div className='paragraph-one'>
                <p className='verify-email' >Please verify your email</p>
                <p style={{ marginLeft: "1.5vw" }}>We sent an email to <span className='hello-gmail'>hello@gmail.com </span> for verification. Please check your email to verify and activate your account.</p>
            </div>


            <div style={{ marginTop: "4vh" }}>
                <p className='ifyou-look' >If you haven’t received an email, please check your spam folder or Click here to resend the email</p>
                <p className='ifyou-look' >Looking to change your email address? change</p>
            </div>

        </div>


    )
}

export default Getstarted