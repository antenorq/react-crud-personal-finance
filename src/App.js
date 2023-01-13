import "./App.css";

import React from "react";
import Button from "@mui/material/Button";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  return (
    <Layout>
      <h1>Personal Finance</h1>
      <Button variant="contained">Hello World</Button>
      <Login />
    </Layout>
  );
}

export default App;
