import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CgProfile } from "react-icons/cg";
import Sidebar from "./sidebar";
import SideBarStudent from "./SideBarStudent";

function NavbarStudent() {
  const [state, setState] = useState("");
  async function data() {
    const docRef = doc(db, "students", "recent");
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()["email"];
    console.log(data);

    const docRef1 = doc(db, "approvedUser", data);
    const docSnap1 = await getDoc(docRef1);

    if (docSnap1.exists()) {
      setState(docSnap1.data());
      console.log("Document data:", docSnap1.data());
      let data = docSnap1.data();
      setState(data);
      console.log("hi", docSnap1.id);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  // console.log("State : ", state);
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <SideBarStudent />
      <Container className="flex-container">
        <Navbar.Brand href="#logo">Placement Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={<CgProfile />} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">hi{state}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarStudent;
