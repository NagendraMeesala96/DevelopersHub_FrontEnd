import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import Rating from "@mui/material/Rating";
import { Grid, Typography } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Proposal(props) {
  let bidsData = props.data;

  const navigate = useNavigate();

  const viewProfileHandler = (id) => {
    navigate(`/OthersProfile/${id}`);
  };
  return (
    <Fragment>
      {bidsData.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {bidsData.map((bid, index) => {
            return (
              <Paper
                elevation={4}
                style={{ borderRadius: 12, height: 450, width: 600 }}
                className="card card-hover"
                //sx={{ ...commonStyles, borderColor: "secondary.main" }}
                key={index}
              >
                <div style={{ padding: 20 }}>
                  <Row>
                    <Col
                      xs={6}
                      md={4}
                      className="d-flex justify-content-start align-items-start"
                    >
                      <img
                        src={
                          bid.UserDetails.UserProfile
                            ? bid.UserDetails.UserProfile
                            : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                        }
                        alt="Generic placeholder image"
                        className="img-fluid "
                        style={{
                          width: 180,
                          height: 180,
                          borderRadius: 10,
                        }}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <Typography className="d-flex justify-content-start align-items-start">
                        <PersonIcon /> {bid.UserDetails.UserName}
                      </Typography>
                      <Typography className="mt-3 d-flex justify-content-start align-items-start">
                        <WorkIcon /> {bid.UserDetails.UserJobRole}
                      </Typography>
                      <Typography className="mt-3 d-flex justify-content-start align-items-start">
                        <LocalPhoneIcon /> {bid.UserDetails.UserNum}
                      </Typography>
                      <Typography className="mt-3 d-flex justify-content-start align-items-start">
                        <MailIcon /> {bid.UserDetails.UserMail}
                      </Typography>
                      <Typography className="mt-3 d-flex justify-content-start align-items-start">
                        <b>Bid Price : ${bid.BidPrice} USD</b>
                      </Typography>
                      <Typography className="mt-3 d-flex justify-content-start align-items-start">
                        <b>No.of Days :{bid.NoOfDaysDelivery} Days</b>
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col xs={5} md={4}>
                      <button
                        type="button"
                        className="btn btn-outline-success me-1 flex-grow-1 btn-sm w-100 p-2"
                        onClick={() => {
                          viewProfileHandler(bid.UserDetails.UserId);
                        }}
                      >
                        View Profile
                      </button>
                    </Col>
                    <Col xs={7} md={4}>
                      <div
                        className="d-flex justify-content-center align-items-center rounded-3 p-2"
                        style={{ backgroundColor: "#efefef" }}
                      >
                        <div className="row">
                          <div className="col-md">
                            <Rating
                              name="half-rating-read"
                              defaultValue={bid.UserDetails.UserRating}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Typography className="mt-2" style={{ textAlign: "justify" }}>
                    {bid.Proposal}
                  </Typography>
                </div>
              </Paper>
            );
          })}
        </Box>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <Typography variant="h3">No Bids Founds</Typography>
        </div>
      )}
    </Fragment>
  );
}

export default Proposal;
