import { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import CodeIcon from "@mui/icons-material/Code";
import Paper from "@mui/material/Paper";
import { Typography, TextField } from "@mui/material";
import LogInFormValidation from "./FormValidation";

function LogIn() {
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    width: "5rem",
    height: "5rem",
  };

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    Email: "",
    Password: "",
  });

  const [emailError, setEmailError] = useState()

  const [passwordError, setPasswordError] = useState();

  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };


  //Click On Login
  const submitHandler = (e) => {
    e.preventDefault();
    LogInFormValidation.validate(userData, { abortEarly: false })
      .then((res) => {
        axios
          .post(`https://developershubbackend.herokuapp.com/login`, userData)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            navigate("/Dashboard");
          })
          .catch((err) => {
            alert(err.response.data);
            console.log(err);
          });
      })
      .catch((err) => {
        setEmailError(err.inner[0].message)
        setPasswordError(err.inner[1].message)
      });
  };
  return (
    <Fragment>
      <Navbar
        bg="dark"
        expand="sm"
        className="mb-3 bottom-border"
        variant="dark"
        style={{ position: "sticky" }}
      >
        <Container fluid>
          <Navbar.Brand href="/ClientHomePage" className="text-white">
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
                <Nav.Link href="/Home" className="text">
                  Admin
                </Nav.Link>
                <Nav.Link href="/MyProfile" className="text">
                  SignUp
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <section className="signup">
        <div className="signup-form">
          <form onSubmit={submitHandler}>
            <h2>LogIn</h2>
            <p className="hint-text">
              LogIn your account. It's easy and only takes a minute.
            </p>
            <div className="form-group">
              <TextField
                id="filled-number"
                label="Email"
                name="Email"
                type="text"
                className="mt-4 w-100"
                onChange={changeHandler}
                InputLabelProps={{
                  shrink: true,
                }}
                error= {emailError}
                helperText={emailError}
              />
            </div>
            <div className="form-group">
              <TextField
                id="filled-number2"
                label="Password"
                name="Password"
                type="password"
                className="mt-4 w-100"
                onChange={changeHandler}
                InputLabelProps={{
                  shrink: true,
                }}
                error= {passwordError}
                helperText={passwordError}
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success btn-lg btn-block"
              >
                LogIn Now
              </button>
            </div>
            <div className="text-center">
              <p>
                You don't have account? <a href="/SignUp">Create An Account</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
}

export default LogIn;
