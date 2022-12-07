import React from "react";
import Modal from "react-bootstrap/Modal";
import { BiArrowBack } from "react-icons/bi";
function ModalComp(props) {
  const { modalTitle, modalBody, modalFooter, showModal, closeModal, showBackBtn, movetoPreviousModal, size = "sm", className = "" } = props;

  return (
    <Modal show={showModal} onHide={closeModal} size={size} className={className}>
      <Modal.Header closeButton style={{ borderBottom: "none" }}>
        {showBackBtn && <BiArrowBack onClick={movetoPreviousModal}/>}
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
        {modalFooter}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComp;
