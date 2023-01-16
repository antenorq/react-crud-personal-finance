import "./App.css";

import React from "react";
import { Button, Typography } from "@mui/material";
import Layout from "./components/Layout";
import Login from "./components/Login";
import AreaAppBar from "./components/AreaAppBar";
import TemporaryDrawer from "./components/Drawer";
//import { PersistentDrawerLeft } from "./components/PersistentDrawerLeft";

function App() {
  return (
    <>
      <AreaAppBar />
      <TemporaryDrawer />
      <Layout>
        <Typography component="h1" variant="h4">
          OPOPO KJKJKJ JK
        </Typography>
        <Button variant="contained">Hello World</Button>
        <Login />
        {/*<PersistentDrawerLeft />*/}
      </Layout>
    </>
  );
}

export default App;
