import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { BiDiamond, BiMoney, BiEdit } from "react-icons/bi";
import DiamondIcon from "@mui/icons-material/Diamond";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { textAlign } from "@mui/system";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
export default function App() {
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    width: "5rem",
    height: "5rem",
  };

  const top100Films = [
    {title:'Java'},
    {title:'Python'},
    {title:'React'},
    {title:'JavaScript'}
  ];

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Dashboard
    </Link>,
    
  ];

  return (
    <React.Fragment>
      <AppBar position="sticky" variant="">
        <Toolbar>
          <Typography variant="h4">Navbar</Typography>
        </Toolbar>
      </AppBar>
      <div className="container-fluid ">
        
        <Row>
          <Col sm={3} className='mt-3'>
            <Paper
              elevation={4}
              style={{ borderRadius: 12, height: "100%", width: "100%" }}
              className="card card-hover"
              sx={{ ...commonStyles, borderColor: "secondary.main" }}
            >
              <div style={{ padding: 20, margin: 0 }}>
                <Typography variant="h6">Filters</Typography>
                <TextField
                  id="filled-number"
                  label="Search With Key Words"
                  type="text"
                  className="mt-3 w-100"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="filled-number"
                  label="Min USD"
                  type="number"
                  className="mt-3 w-100"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="filled-number"
                  label="Max USD"
                  type="number"
                  className="mt-3 w-100"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  className="mt-2 w-100"
                  options={top100Films}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.title}
                    </li>
                  )}
                  style={{ width: 500 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Skills"
                      placeholder="Favorites"
                    />
                  )}
                />
                <Button variant="outlined" color='success' className="mt-3">Search</Button>
              </div>
            </Paper>
          </Col>
          <Col sm={9} className="mt-3">
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
              <Paper
                elevation={4}
                style={{ borderRadius: 12, height: 390, width: 505 }}
                className="card card-hover"
                sx={{ ...commonStyles, borderColor: "secondary.main" }}
              >
                <div style={{ padding: 15, margin: 15 }}>
                  <Typography variant="p" className="fw-bold">
                  Buy/Sell Request form revision and System creation -- 2
                  </Typography>
                  <Grid container spacing={2} className='mt-1'>
                    <Grid item xs={4}>
                      <Typography>
                        <PersonIcon /> HR/Admin
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Typography>
                        <DiamondIcon /> 3 Bids
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      className="d-flex justify-content-end align-items-end"
                    >
                      <Typography className='fw-bold'>
                        <BiMoney /> $390
                      </Typography>
                    </Grid>
                  </Grid>
                  &nbsp;
                  <Typography>
                    A data analyst collects, interprets and visualizes data to
                    uncover insights. A data analyst assigns a numerical value
                    to business functions so performance is assessed and
                    compared over time &nbsp;
                    <a href="#">Read More</a>
                  </Typography>
                  &nbsp;
                  <hr />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography>
                        <BiEdit /> Posted By
                      </Typography>
                      <Typography>16-02-2021, 15:15 PM</Typography>
                    </Grid>
                    <Grid
                      xs={6}
                      className="d-flex justify-content-end align-items-end"
                    >
                      <Button
                        variant="contained"
                        color="success"
                        startIcon={<CheckOutlinedIcon />}
                      >
                        Place Bid
                      </Button>
                    </Grid>
                  </Grid>
                </div>
                ;
              </Paper>
              <Paper
                elevation={4}
                style={{ borderRadius: 12, height: 350, width: 505 }}
                className="card card-hover"
                sx={{ ...commonStyles, borderColor: "secondary.main" }}
              >
                <div style={{ padding: 20, margin: 15 }}>
                  <Typography variant="h5" className="fw-bold">
                    Data Analyst
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography>
                        <PersonIcon /> HR/Admin
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Typography>
                        <DiamondIcon /> 3 Bids
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      className="d-flex justify-content-end align-items-end"
                    >
                      <Typography>
                        <BiMoney /> $390
                      </Typography>
                    </Grid>
                  </Grid>
                  &nbsp;
                  <Typography>
                    A data analyst collects, interprets and visualizes data to
                    uncover insights. A data analyst assigns a numerical value
                    to business functions so performance is assessed and
                    compared over time &nbsp;
                    <a href="#">Read More</a>
                  </Typography>
                  &nbsp;
                  <hr />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography>
                        <BiEdit /> Posted By
                      </Typography>
                      <Typography>16-02-2021, 15:15 PM</Typography>
                    </Grid>
                    <Grid
                      xs={6}
                      className="d-flex justify-content-end align-items-end"
                    >
                      <Button
                        variant="contained"
                        color="success"
                        startIcon={<CheckOutlinedIcon />}
                      >
                        Place Bid
                      </Button>
                    </Grid>
                  </Grid>
                </div>
                ;
              </Paper>
              <Paper
                elevation={4}
                style={{ borderRadius: 12, height: 350, width: 505 }}
                className="card card-hover"
                sx={{ ...commonStyles, borderColor: "secondary.main" }}
              >
                <div style={{ padding: 20, margin: 15 }}>
                  <Typography variant="h5" className="fw-bold">
                    Data Analyst
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography>
                        <PersonIcon /> HR/Admin
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Typography>
                        <DiamondIcon /> 3 Bids
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      className="d-flex justify-content-end align-items-end"
                    >
                      <Typography>
                        <BiMoney /> $390
                      </Typography>
                    </Grid>
                  </Grid>
                  &nbsp;
                  <Typography>
                    A data analyst collects, interprets and visualizes data to
                    uncover insights. A data analyst assigns a numerical value
                    to business functions so performance is assessed and
                    compared over time &nbsp;
                    <a href="#">Read More</a>
                  </Typography>
                  &nbsp;
                  <hr />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography>
                        <BiEdit /> Posted By
                      </Typography>
                      <Typography>16-02-2021, 15:15 PM</Typography>
                    </Grid>
                    <Grid
                      xs={6}
                      className="d-flex justify-content-end align-items-end"
                    >
                      <Button
                        variant="contained"
                        color="success"
                        startIcon={<CheckOutlinedIcon />}
                      >
                        Place Bid
                      </Button>
                    </Grid>
                  </Grid>
                </div>
                ;
              </Paper>
              <Paper
                elevation={4}
                style={{ borderRadius: 12, height: 350, width: 505 }}
                className="card card-hover"
                sx={{ ...commonStyles, borderColor: "secondary.main" }}
              >
                <div style={{ padding: 20, margin: 15 }}>
                  <Typography variant="h5" className="fw-bold">
                    Data Analyst
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography>
                        <PersonIcon /> HR/Admin
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Typography>
                        <DiamondIcon /> 3 Bids
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      className="d-flex justify-content-end align-items-end"
                    >
                      <Typography>
                        <BiMoney /> $390
                      </Typography>
                    </Grid>
                  </Grid>
                  &nbsp;
                  <Typography>
                    A data analyst collects, interprets and visualizes data to
                    uncover insights. A data analyst assigns a numerical value
                    to business functions so performance is assessed and
                    compared over time &nbsp;
                    <a href="#">Read More</a>
                  </Typography>
                  &nbsp;
                  <hr />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography>
                        <BiEdit /> Posted By
                      </Typography>
                      <Typography>16-02-2021, 15:15 PM</Typography>
                    </Grid>
                    <Grid
                      xs={6}
                      className="d-flex justify-content-end align-items-end"
                    >
                      <Button
                        variant="contained"
                        color="success"
                        startIcon={<CheckOutlinedIcon />}
                      >
                        Place Bid
                      </Button>
                    </Grid>
                  </Grid>
                </div>
                ;
              </Paper>
            </Box>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
