import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CgProfile } from "react-icons/cg";
import Sidebar from "./sidebar";
import SideBarStudent from "./SideBarStudent";

function NavbarStudent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <SideBarStudent />
      <Container className="flex-container">
        <Navbar.Brand href="#logo">Placement Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={<CgProfile />} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarStudent;
