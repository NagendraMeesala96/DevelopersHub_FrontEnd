import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EditEducation from "./EditEducation";
import NavBar from "../NavBar";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Footer from "../Footer";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Comment";
import { useParams } from "react-router-dom";
function OthersProfile() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);

  const [review, setReview] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {

    axios
      .get(`https://developershubbackend.herokuapp.com/UserProfile/${id}`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUserData([...userData,res.data]);
        axios
          .get(`https://developershubbackend.herokuapp.com/UserProfile/Ratings/${id}`, {
            headers: {
              "x-token": localStorage.getItem("token"),
            },
          })
          .then((res) => {
            setReview(res.data);
          })
          .catch((err) => {
            alert(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <NavBar />

      <section>
        <div className="container">
          <a href="/Dashboard" className="mt-3 btn btn-primary">
            Back To Home
          </a>
          {userData.map((data,index) => {
            return (
              <div key={index}>
                <div className="profile-bord mt-3">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mb-3 p-3" style={{ height: 550 }}>
                        <h4 className="text-center">User ProfilePic</h4>
                        <div className="card-body text-center">
                          <img
                            src={data.ProfilePic}
                            alt="avatar"
                            className="rounded-circle img-fluid"
                            style={{ width: "215px", height: "215px" }}
                          />
                          <h5 className="my-3 text-center">{data.FullName}</h5>
                          <p className="text-muted   text-center">
                            {data.JobRole}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card mb-4 p-3" style={{ height: 550 }}>
                        <h4 className="text-center">Personal Details</h4>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Name</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{data.FullName}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Email</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{data.Email}</p>
                            </div>
                          </div>
                          <hr />

                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Mobile</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{data.Mobile}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Address</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{data.Address}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Skills</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{data.Skills}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Projects :</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{data.Projects}</p>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="card mb-4 mb-lg-4"
                        style={{ height: "550px" }}
                      >
                        <div className="card-body p-3">
                          <h4 className="text-center">Social Media</h4>
                          <ul className="list-group list-group-flush rounded-3">
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <LanguageIcon />
                              <p className="mb-0">
                                https://{data.SocialMedia.Website}.com
                              </p>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <GitHubIcon />
                              <p>{data.SocialMedia.GitHub}</p>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <LinkedInIcon />
                              <p>{data.SocialMedia.LinkedIn}</p>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <TwitterIcon />
                              <p className="mb-0">
                                @{data.SocialMedia.Twitter}
                              </p>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <InstagramIcon />
                              <p className="mb-0">
                                {data.SocialMedia.Instagram}
                              </p>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <FacebookIcon />
                              <p className="mb-0">
                                {data.SocialMedia.Facebook}
                              </p>
                            </li>
                          </ul>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card p-2">
                  <div className="card-body">
                    <h2>Education</h2>
                    <div className="form-group-inline">
                      <Row>
                        <label>Graduation :</label>
                        <Col sm={6}>
                          <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="College Name"
                            disabled
                            value={data.Education.Graduation.CollegeName1}
                          ></input>
                        </Col>
                        <Col sm={6}>
                          <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Percentage"
                            disabled
                            value={data.Education.Graduation.Percentage1 + "%"}
                          ></input>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-group mt-2">
                      <Row>
                        <label>Secondary :</label>
                        <Col sm={6}>
                          <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="College Name"
                            disabled
                            value={data.Education.Secondary.CollegeName2}
                          ></input>
                        </Col>
                        <Col sm={6}>
                          <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Percentage"
                            disabled
                            value={data.Education.Secondary.Percentage2 + "%"}
                          ></input>
                        </Col>
                      </Row>
                    </div>
                    <div className="form-group mt-2">
                      <Row>
                        <label>School :</label>
                        <Col sm={6}>
                          <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="College Name"
                            disabled
                            value={data.Education.School.SchoolName}
                          ></input>
                        </Col>
                        <Col sm={6}>
                          <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Percentage"
                            disabled
                            value={data.Education.School.Percentage3 + "%"}
                          ></input>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <h3 className="mt-3">
            <i className="fa fa-github"></i> Reviews And Ratings
          </h3>
          <div
            className=""
            style={{
              display: "flex",
              flexWrap: "wrap",
              //justifyContent: "start",
            }}
          >
            {review.length >= 1 ? (
              review.map((rev,index) => {
                return (
                  <div className="row m-2" style={{ width: 300 }} key={index}>
                    <div className="card p-3 mt-2 d-flex align-items-center justify-content-center">
                      <h4 className="d-flex justify-content-center align-items-center">
                        <PersonIcon /> {rev.taskProvider}
                      </h4>
                      <p className="d-flex justify-content-center align-items-center">
                        <StarIcon />
                        <b>Rating : </b>
                        {rev.rating}/5
                      </p>
                      <p>
                        <CommentIcon />

                        {rev.reviewContent}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="error-msg">
                <h3 className="text-danger border p-2">
                  No Reviews and Ratings
                </h3>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </section>
    </Fragment>
  );
}

export default OthersProfile;
