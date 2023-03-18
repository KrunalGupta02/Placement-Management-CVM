import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListItems from "./List";
import { GiHamburgerMenu } from "react-icons/gi";
import ListStudent from "./ListStudent";

export default function SideBarStudent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <GiHamburgerMenu />
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="sidebar-title">Student</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListStudent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
