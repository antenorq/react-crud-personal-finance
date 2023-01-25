import React from "react";
import "./app.css";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import AreaAppBar from "./components/AreaAppBar";
import Login from "./components/Login";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AreaAppBar maxWidth="xl" />
      <Container maxWidth="xl" sx={{ my: 4, p: 4 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
