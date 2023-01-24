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
  const iconsize = { fontSize: { xs: "80px", sm: "100px", md: "150px" } };

  return (
    <Grid
      container
      rowSpacing={{ xs: 2, sm: 2, md: 4 }}
      columnSpacing={{ xs: 2, sm: 2, md: 4 }}
    >
      <Grid item xs={6} sm={4} md={4}>
        <NavLink to="/income" style={{ textDecoration: "none" }}>
          <Paper
            className={style.paper}
            elevation={3}
            sx={{ p: { xs: 2, sm: 2, md: 4 } }}
          >
            <AddCircleIcon color="success" sx={iconsize} />
            <Typography variant="h6">INCOME</Typography>
          </Paper>
        </NavLink>
      </Grid>

      <Grid item xs={6} sm={4} md={4}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <RemoveCircleIcon color="error" sx={iconsize} />
          <Typography variant="h6">EXPENSE</Typography>
        </Paper>
      </Grid>

      <Grid item xs={6} sm={4} md={4}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <ManageSearchIcon color="primary" sx={iconsize} />
          <Typography variant="h6">SEARCH</Typography>
        </Paper>
      </Grid>

      <Grid item xs={6} sm={4} md={4}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <ListAltIcon color="primary" sx={iconsize} />
          <Typography variant="h6">CATEGORY</Typography>
        </Paper>
      </Grid>

      <Grid item xs={6} sm={4} md={4}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <KeyIcon color="primary" sx={iconsize} />
          <Typography variant="h6">PASSWORD</Typography>
        </Paper>
      </Grid>

      <Grid item xs={6} sm={4} md={4}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <CancelIcon color="primary" sx={iconsize} />
          <Typography variant="h6">LOGOUT</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
