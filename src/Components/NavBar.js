import { AppBar, Toolbar, Typography } from "@mui/material";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import CodeIcon from "@mui/icons-material/Code";
import { Navigate, useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar
      bg="dark"
      expand="sm"
      className="mb-3 bottom-border"
      variant="dark"
      style={{ backgroundColor: "#071740", position: "sticky" }}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="/Dashboard" className="text-white">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <CodeIcon />
          Developers Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Developers Hub
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/Dashboard" className="text">
                Home
              </Nav.Link>
              <Nav.Link href="/MyProfile" className="text">
                My Profile
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="text"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("userType");
                  localStorage.removeItem("userId");
                  navigate("/LogIn");
                }}
              >
                Log Out
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
