import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import AreaAppBar from "./components/AreaAppBar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AreaAppBar />
      <Box sx={{ my: 2 }}>
        <Dashboard />
        <Login />
      </Box>
    </Container>
  );
}

export default App;
