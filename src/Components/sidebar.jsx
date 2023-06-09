import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListItems from "./List";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
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
          <Offcanvas.Title className="sidebar-title">Admin</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListItems />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
