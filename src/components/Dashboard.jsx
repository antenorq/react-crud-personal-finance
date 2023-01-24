import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import SummarizeIcon from "@mui/icons-material/Summarize";
import style from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <Grid
      container
      rowSpacing={{ xs: 2, sm: 2, md: 4 }}
      columnSpacing={{ xs: 2, sm: 2, md: 4 }}
    >
      <Grid item xs={6} sm={4} md={3}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <PaidIcon
            color="error"
            sx={{ fontSize: { xs: "80px", sm: "100px", md: "150px" } }}
          />
          <Typography variant="h6">CADASTRAR DESPESAS</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <PaidIcon
            color="success"
            sx={{ fontSize: { xs: "80px", sm: "100px", md: "150px" } }}
          />
          <Typography variant="h6">CADASTRAR RECEITA</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <SummarizeIcon
            color="primary"
            sx={{ fontSize: { xs: "80px", sm: "100px", md: "150px" } }}
          />
          <Typography variant="h6">RELATORIO</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <PaidIcon
            color="primary"
            sx={{ fontSize: { xs: "80px", sm: "100px", md: "150px" } }}
          />
        </Paper>
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <PaidIcon
            color="primary"
            sx={{ fontSize: { xs: "80px", sm: "100px", md: "150px" } }}
          />
        </Paper>
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <PaidIcon
            color="primary"
            sx={{ fontSize: { xs: "80px", sm: "100px", md: "150px" } }}
          />
        </Paper>
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <PaidIcon
            color="primary"
            sx={{ fontSize: { xs: "80px", sm: "100px", md: "150px" } }}
          />
        </Paper>
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Paper
          className={style.paper}
          elevation={3}
          sx={{ p: { xs: 2, sm: 2, md: 4 } }}
        >
          <PaidIcon
            color="primary"
            sx={{ fontSize: { xs: "80px", sm: "100px", md: "150px" } }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
