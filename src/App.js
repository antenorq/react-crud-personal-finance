import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import AreaAppBar from "./components/AreaAppBar";
import Login from "./components/Login";
import { MarginOutlined, RoundedCorner } from "@mui/icons-material";

function App() {
  return (
    <Container maxWidth="xl" sx={{ borderRadius: 2 }}>
      <CssBaseline />
      <AreaAppBar />
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          mt: 4,
        }}
      >
        <Login />
      </Box>
    </Container>
  );
}

export default App;
