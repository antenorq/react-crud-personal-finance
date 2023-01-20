import React from "react";
import { Box, Container, CssBaseline, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ bgcolor: "#eee", borderRadius: "5px", my: 2, p: 1 }}
    >
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box sx={{ bgcolor: "#fff", borderRadius: "5px", height: "250px" }}>
            popo
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ bgcolor: "#fff", borderRadius: "5px", height: "250px" }}>
            asdasd
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ bgcolor: "#fff", borderRadius: "5px", height: "250px" }}>
            asd
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ bgcolor: "#fff", borderRadius: "5px", height: "250px" }}>
            asd
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ bgcolor: "#fff", borderRadius: "5px", height: "250px" }}>
            asd
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ bgcolor: "#fff", borderRadius: "5px", height: "250px" }}>
            asd
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ bgcolor: "#fff", borderRadius: "5px", height: "250px" }}>
            asdasd
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ bgcolor: "#fff", borderRadius: "5px", height: "250px" }}>
            eqweqw
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
