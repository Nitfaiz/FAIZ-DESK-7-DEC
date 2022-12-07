import React, { useState } from "react";
import ModalComp from "./ModalCom";
import Button from "react-bootstrap/Button";
// import Header from './Header'
import {MdChat} from "react-icons/md"
import ReactSideBar from "./ReactSideBar"
// import { Navbar } from "react-bootstrap";
import Navbar from "./NavBar"

function Dashboard() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const  getModalBody = () => {
    return (
        <div>
            <img  src="https://indfassetsblue.freshdesk.com/production/a/assets/images/onboarding/industry-onboarding-0b7f007a8d2b6316bd55603b7b2c45da6786933da587251ad16c56cd72870f42.svg" width="95%"/>
          <span style={{ fontWeight: "600", fontSize: "16px" }}>
            What industry are you in?{" "}
          </span>
          <select
            className="form-control form-control-sm dropdown-small"
            style={{ appearance: "auto" }}
          >
            <option>Small select</option>
            <option>okay select</option>
            <option>large select</option>
            <option>big select</option>
            <option>mid select</option>
          </select>

          <p style={{marginTop:"2vh"}}>You can change the industry if necessary. We made this assumption based on your email address.</p>
        </div>
    )

  }
  const getModalFooter =()=>{
    return (
        <>
         <Button  className = "btn-personalize"  onClick={handleClose}>
            Personalize Now
          </Button >
          <Button className='border border-primary"'  variant="light"  onClick={handleClose}>
            Skip
          </Button>
        </>
    )
  }

  if (show) {
    return (
      <ModalComp
        showModal={show}
        closeModal={handleClose}
        modalTitle= {<h1 className="head-help">Help us personalize Freshdesk &nbsp;  <p className="head-help" style={{lineHeight:"50px"}}>for you!</p></h1>}
        modalBody={getModalBody()}
        modalFooter={getModalFooter()}
        showBackBtn={false}
        size="md"
        className="popup"
      />
    );
  }

  return (
    <div className='big-box d-flex' >
    <div className='left-box' style={{width:"5vw",backgroundColor:"#183247",height:"100vh"}}> <ReactSideBar/> </div>
    <div className='right-box' style={{width:"95vw",backgroundColor:"lightgray",height:"100vh"}}> 

    <Navbar/>
    

    <div className="h-button"> <MdChat style={{fontSize:"24px"}}/> </div>

    </div>

</div>
  );
}

export default Dashboard;

