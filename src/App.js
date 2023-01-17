import React from "react";

import { Container, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import AreaAppBar from "./components/AreaAppBar";
import Login from "./components/Login";
import { MarginOutlined, RoundedCorner } from "@mui/icons-material";

function App() {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AreaAppBar />
      <Login />
    </Container>
  );
}

export default App;
