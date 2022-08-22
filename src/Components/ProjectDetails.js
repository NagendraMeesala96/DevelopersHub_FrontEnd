import { Fragment, useState, useEffect } from "react";
import NavBar from "./NavBar";
import Paper from "@mui/material/Paper";
import { Row, Col } from "react-bootstrap";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Proposal from "./Proposals";
import { useNavigate, useParams } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "axios";
import Footer from "./Footer";
//import bidFormValidation from "./FormValidation";
function ProjectDetails() {
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    width: "5rem",
    height: "5rem",
  };
  const commonStyles2 = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    width: "20rem",
    height: "2rem",
  };
  const navigate = useNavigate();

  const [allBids, setAllBids] = useState([]);

  const [postData, setPostData] = useState([]);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isBid, setIsBid] = useState("");

  let { id } = useParams();

  let [skills, setSkills] = useState([]);

  const [bidData, setBidData] = useState({
    PostId: id,
    BidPrice: "",
    NoOfDaysDelivery: "",
    Proposal: "",
  });

  useEffect(() => {
    loadAllBids();
    checkBid();
    loadPostDetails();
  }, []);

  //User provided Bid Data assign to State
  const changeHandler = (e) => {
    setBidData({ ...bidData, [e.target.name]: e.target.value });
  };

  //Load All the proposal of Post
  const loadAllBids = () => {
    axios({
      url: `http://localhost:3000/PostBid/${id}`,
      method: "GET",
      headers: {
        "x-token": localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setAllBids(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Check whether user is already bid or not
  const checkBid = () => {
    console.log();
    axios({
      url: `http://localhost:3000/checkBid/${id}`,
      method: "POST",
      headers: {
        "x-token": localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        setIsBid(res.data.error);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Load All the Posts
  const loadPostDetails = () => {
    axios({
      url: `http://localhost:3000/GetPost/${id}`,
      method: "GET",
      headers: {
        "x-token": localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setPostData(res.data);
        //console.log(res.data[0].RequiredSkills)
        let data = res.data[0].RequiredSkills.split(",");
        console.log(data);
        setSkills(...skills, data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Submit Bit
  const bidHandler = () => {
    if(bidData.BidPrice =="" || bidData.NoOfDaysDelivery=="" || bidData.Proposal==""){
      alert("Please Fill All the Fields")
    }else{
    axios
      .post("http://localhost:3000/PlaceBid", bidData, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        axios
          .put(`http://localhost:3000/UpdateBid/${id}`, {
            headers: {
              "x-token": localStorage.getItem("token"),
            },
          })
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        alert(err);
      });
    }
  };
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", color: "white" }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Project Details" value="1" />
                <Tab label="Proposals" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Row>
                <Col sm={8}>
                  {postData.map((data, index) => {
                    return (
                      <Paper
                        elevation={8}
                        style={{
                          padding: 20,
                          borderRadius: 12,
                          height: "100%",
                          width: "100%",
                        }}
                        className="card card-hover"
                        //sx={{ ...commonStyles, borderColor: "secondary.main" }}
                      >
                        <Row>
                          <Col xs={10} md={10}>
                            <Typography variant="h5">
                              {data.PostTitle}
                            </Typography>
                          </Col>
                          <Col xs={1} md={2} className="fw-bold mt-2">
                            ${data.BidPrice} USD
                          </Col>
                        </Row>
                        <hr />
                        <Typography
                          className="text-justify"
                          style={{ textAlign: "justify" }}
                        >
                          {data.Description}
                        </Typography>
                        <Typography className="mt-4 fw-bold">
                          Skills Required :{data.RequiredSkills}
                        </Typography>
                      </Paper>
                    );
                  })}
                </Col>
                <Col sm={4} className="mt-3">
                  <Row>
                    <Paper
                      elevation={8}
                      style={{
                        padding: 20,
                        alignItems: "center",
                        borderRadius: 12,
                        height: isBid == "Yes" ? "200px" : "500px",
                        width: "95%",
                        marginLeft: 10,
                      }}
                      className="card card-hover"
                      //sx={{ ...commonStyles, borderColor: "dark.main" }}
                    >
                      <Typography className="fw-bold">
                        Place a Bid on this Project
                      </Typography>
                      {isBid != "Yes" ? (
                        <div>
                          <TextField
                            id="filled-number"
                            label="Project ID"
                            type="text"
                            value={id}
                            className="mt-4 w-100"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            disabled
                          />
                          <TextField
                            id="filled-number"
                            label="Bid Amount"
                            type="text"
                            className="mt-4 w-100"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="BidPrice"
                            onChange={changeHandler}
                          />
                          <TextField
                            id="filled-number"
                            label="No.Of Days To Delivery"
                            type="number"
                            name="NoOfDaysDelivery"
                            className="mt-4 w-100"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={changeHandler}
                          />
                          <TextareaAutosize
                            aria-label="minimum height"
                            minRows={4}
                            name="Proposal"
                            className="mt-4 w-100"
                            placeholder="Proposal"
                            style={{ width: 200 }}
                            onChange={changeHandler}
                          />
                          <Button
                            variant="contained"
                            className="mt-3 w-100"
                            color="success"
                            startIcon={<CheckOutlinedIcon />}
                            onClick={bidHandler}
                          >
                            Place Bid
                          </Button>
                        </div>
                      ) : (
                        <div className="error">
                          <Typography className="d-flex justify-content-center align-items-center design">
                            <ErrorIcon />
                            &nbsp; You Already Completed Bid For This Project
                          </Typography>
                        </div>
                      )}
                    </Paper>
                  </Row>
                  <Row>
                    <Paper
                      elevation={8}
                      style={{
                        padding: 20,
                        alignItems:"center",
                        borderRadius: 12,
                        height: "280px",
                        width: "95%",
                        marginLeft: 10,
                      }}
                      className="card card-hover mt-3"
                      // sx={{ ...commonStyles, borderColor: "secondary.main" }}
                    >
                      <Typography className="fw-bold d-flex justify-content-center align-items-center">
                        About The Client
                      </Typography>
                      <hr />
                      {postData.map((clientData) => {
                        return (
                          <div >
                            <Avatar
                              alt="Client"
                              className="fw-bold d-flex justify-content-center"
                              src={clientData.OwnerDetails.ClientProfilePic}
                            />
                            <Typography className="text-left mt-3">
                              Name : {clientData.OwnerDetails.ClientName}
                            </Typography>
                            <Typography className="text-left mt-3">
                              Mobile : {clientData.OwnerDetails.ClientNum}
                            </Typography>
                            <Typography className="text-left mt-3">
                              Email : {clientData.OwnerDetails.ClientEmail}
                            </Typography>
                          </div>
                        );
                      })}
                    </Paper>
                  </Row>
                </Col>
              </Row>
            </TabPanel>

            <TabPanel value="2">
              <Proposal data={allBids} />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      <Footer />
    </Fragment>
  );
}

export default ProjectDetails;
