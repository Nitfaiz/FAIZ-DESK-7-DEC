import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Newmodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="popup"
      >
        <Modal.Header closeButton>
          <Modal.Title>Help us personalize Freshdesk for you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <img src="https://indfassetsblue.freshdesk.com/production/a/assets/images/onboarding/industry-onboarding-0b7f007a8d2b6316bd55603b7b2c45da6786933da587251ad16c56cd72870f42.svg" alt= "faizdesk logo"></img>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Newmodal;
