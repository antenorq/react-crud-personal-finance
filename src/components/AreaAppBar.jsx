import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "../components/Drawer";
import { useState, useEffect } from "react";

export default function AreaAppBar() {
  const [stateDrawer, setStateDrawer] = useState(false);

  const showDrawer = (e) => {
    if (stateDrawer === false) {
      setStateDrawer(true);
    } else {
      setStateDrawer(false);
    }
  };

  useEffect(() => {
    console.log("stateDrawer: " + stateDrawer);
    /*setStateDrawer(false);*/
    /*showDrawer();*/
  }, [stateDrawer]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={showDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New
          </Typography>
          <Button color="inherit" onClick={showDrawer}>
            ABRIR DRAWER
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer estado={stateDrawer} />
    </Box>
  );
}
