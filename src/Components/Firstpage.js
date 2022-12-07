import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, InputGroup  } from "react-bootstrap";
import { useNavigate,  NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
import ModalComp from "./ModalCom";
import Col from 'react-bootstrap/Col';
import { FaUserAlt } from "react-icons/fa"
import { MdAttachEmail } from "react-icons/md"
import {TbBuildingSkyscraper} from "react-icons/tb"
import {TfiMobile} from "react-icons/tfi"


function Firstpage() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);
  const gotomod = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      gotomod("/thirdpage")
    }
    setValidated(true);

  };
  
  const signupWithEmail = () => {
    setStep(1);
  };



  const getModalBody = () => {
    if (step) {
      return (
        <Form noValidate  validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col>
            <InputGroup>
              <InputGroup.Text id="basic-addon1"> <FaUserAlt /> </InputGroup.Text>
              <Form.Control  placeholder="First name"  controlId="validationCustom01" required />
              <Form.Control.Feedback type="invalid">
            First name is required
          </Form.Control.Feedback>
            </InputGroup>
            </Col>

            <Col>
              <Form.Control placeholder="Last name" controlId="validationCustom02" required />
              <Form.Control.Feedback type="invalid">
              Last name is required
          </Form.Control.Feedback>
            </Col>
          </Row>

          <Row style={{ marginTop: "4vh" }}>
            <Col>
            <InputGroup>
              <InputGroup.Text id="basic-addon1"> <MdAttachEmail /> </InputGroup.Text>
              <Form.Control type="email" placeholder="Email" controlId="validationCustom03"  required />
              <Form.Control.Feedback type="invalid">
              Email  is required
          </Form.Control.Feedback>
          </InputGroup>
            </Col>
          </Row>

          <Row style={{ marginTop: "4vh" }}>
            <Col>
            <InputGroup>
              <InputGroup.Text id="basic-addon1"> <TbBuildingSkyscraper /> </InputGroup.Text>
              <Form.Control placeholder="Company" controlId="validationCustom04"  required  />
              <Form.Control.Feedback type="invalid">
              Company  is required
          </Form.Control.Feedback>
          </InputGroup>
            </Col>
          </Row>

          <Row style={{ marginTop: "4vh" }}>
            <Col>
            <InputGroup>
              <InputGroup.Text id="basic-addon1"> <TfiMobile /> </InputGroup.Text>
              <Form.Control placeholder="Phone No." maxLength="12" required />
              </InputGroup>
            </Col>
          </Row>

          <div>
            <button
              style={{ marginTop: "4vh" }}
              className="sign-upbtn "
              type="submit"
              // onClick={handleSignupfree}
            >
              Sign up for free
            </button>
            {/* <NavLink to="/thirdpage" > Thirdpage</NavLink> */}
          </div>

          <div style={{ marginTop: "2vh" }}>
            <p>
              By signing up, I accept the Freshworks
              <a
                href="http://fresworks.com/terms"
                target="_self"
                style={{ textDecoration: "none" }}
              >
               
                &nbsp;Terms of Services
              </a>
              &nbsp; and
              <a
                href="http://wwww.freshworks.com/privacy/"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
                target="_self"
              >
                &nbsp; Privacy Notice
              </a>
            </p>
          </div>
        </Form>
      );
    }
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3vh",
          }}
        >
          <h5 style={{ fontWeight: "bold" }}>
            Sign up for a 21 day free trial
          </h5>
        </div>

        <div style={{ marginTop: "2vh" }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Sign up with google
          </button>
        </div>

        <div style={{ marginTop: "6vh" }}>
          <p className="sub-heading">or</p>

          <div>
            <button className="sign-upbtn " onClick={signupWithEmail}>
              Sign up with email
            </button>
          </div>

          <div style={{ marginTop: "2vh" }}>
            <p>
              By signing up, I accept the Freshworks
              <a
                href="http://www.googlfhfe.com"
                target="_self"
                style={{ textDecoration: "none" }}
              >
                
                &nbsp;Terms of Services
              </a>
              &nbsp; and
              <a
                href="http://wwww.freshwosdsrks.com/privacy/"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
                target="_self"
              >
                &nbsp; Privacy Notice
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const getModalFooter = () => {
    if (step) {
      return (<div >
        Your data will be located in India  
       </div>)
    }
    return <div>Your data will be located in India </div>;
  };

  const movetoPreviousModal = () => {
    setStep(0)
  };

  return (
    <>
    <div className="container" style={{marginTop:"10vh"}}>
      <div
        className="container my-5"
        style={{
          display: "flex",
          justifyContent: "space-between",
         
          // marginLeft: "6vw",
        }}
      >
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h5 className="headingOne" >Faizdesk</h5>
        </NavLink>

        <button className="free-trial" onClick={handleShow}>
      
          LOGIN
        </button>
      </div>
      <ModalComp
        showModal={show}
        closeModal={handleClose}
        modalTitle=""
        modalBody={getModalBody()}
        modalFooter={getModalFooter()}
        showBackBtn={step ? true : false}
        movetoPreviousModal={movetoPreviousModal}
        size="md"
      />

      <Row className="row" style={{display:"flex",justifyContent:"space-between"}}>
        <div className="col-md-6" style={{ marginLeft: "0%" }}>
          <h3 className="trustedHeading">Trusted By 50,000+ BUSINESSES </h3>

          <div>
            <h1 className="Deliver-faster">
              Deliver faster and easier customer service
            </h1>
          </div>

          <div className="tryFresh">
            Try Faizdesk — a modern, powerful, and intuitive helpdesk software.
          </div>

          <button
            className="start-your-free-trial"
            type="submit"
            onClick={handleShow}
          >
            START YOUR FREE TRIAL
          </button>

          <p style={{ marginTop: "2vh" }}>
            <i>*No credit card required</i>
          </p>
        </div>

        <img
          lassName="right-container"
          style={{ maxWidth: "480px", minHeight: "40vh"}}
          src="https://images.unsplash.com/photo-1591991564021-0662a8573199?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="DEmo image"
        ></img>
      </Row>
      </div>
    </>
  );
}

export default Firstpage;
