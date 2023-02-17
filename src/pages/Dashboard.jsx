import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import CancelIcon from "@mui/icons-material/Cancel";
import ListAltIcon from "@mui/icons-material/ListAlt";
import KeyIcon from "@mui/icons-material/Key";
import { NavLink } from "react-router-dom";

import style from "./dashboard.module.css";

const Dashboard = () => {
  const iconsize = {
    fontSize: { xs: "80px", md: "100px", lg: "120px" },
  };
  const paperstyle = { p: { xs: 2, sm: 2, md: 4 }, borderRadius: 3 };

  return (
    <Grid
      container
      rowSpacing={{ xs: 2, sm: 2, md: 4 }}
      columnSpacing={{ xs: 2, sm: 2, md: 4 }}
    >
      <Grid item xs={6} sm={4} md={4} lg={2}>
        <NavLink to="/income">
          <Paper className={style.paper} elevation={2} sx={paperstyle}>
            <AddCircleIcon color="success" sx={iconsize} />
            <Typography variant="h6">INCOME</Typography>
          </Paper>
        </NavLink>
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={2}>
        <NavLink to="/expense">
          <Paper className={style.paper} elevation={2} sx={paperstyle}>
            <RemoveCircleIcon color="error" sx={iconsize} />
            <Typography variant="h6">EXPENSE</Typography>
          </Paper>
        </NavLink>
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={2}>
        <Paper className={style.paper} elevation={2} sx={paperstyle}>
          <ManageSearchIcon color="primary" sx={iconsize} />
          <Typography variant="h6">SEARCH</Typography>
        </Paper>
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={2}>
        <Paper className={style.paper} elevation={2} sx={paperstyle}>
          <ListAltIcon color="primary" sx={iconsize} />
          <Typography variant="h6">CATEGORY</Typography>
        </Paper>
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={2}>
        <Paper className={style.paper} elevation={2} sx={paperstyle}>
          <KeyIcon color="primary" sx={iconsize} />
          <Typography variant="h6">PASSWORD</Typography>
        </Paper>
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={2}>
        <Paper className={style.paper} elevation={2} sx={paperstyle}>
          <CancelIcon color="primary" sx={iconsize} />
          <Typography variant="h6">LOGOUT</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={style.paper} elevation={2} sx={paperstyle}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;