import React, { useState } from "react";
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
  const [loggedinname, setLoggedInName] = useState("");

  const getLoggedInName = (loggedinname) => {
    console.log("name from app.js parent: " + loggedinname);
    setLoggedInName(loggedinname);
  };

  return (
    <BrowserRouter>
      <CssBaseline />
      <AreaAppBar maxWidth="xl" loggedinname={loggedinname} />
      <Container maxWidth="xl" sx={{ p: 4 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/login"
            element={<Login getLoggedInName={getLoggedInName} />}
          />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
