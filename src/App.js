import "./App.css";

import React from "react";

import { Button, Typography } from "@mui/material";
import Layout from "./components/Layout";
import Login from "./components/Login";
import AreaAppBar from "./components/AreaAppBar";

function App() {
  return (
    <>
      <AreaAppBar />
      <Layout>
        <Typography component="h1" variant="h4">
          HOME
        </Typography>
        <Button variant="contained">Hello World</Button>
        <Login />
      </Layout>
    </>
  );
}

export default App;
