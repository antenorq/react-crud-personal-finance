import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "../components/Drawer";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function AreaAppBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            sx={{ mr: 2, color: "#fff", display: { xs: "flex", md: "none" } }}
            size="large"
            edge="start"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PERSONAL FINANCE
          </Typography>

          <Button
            component={NavLink}
            to={"/"}
            variant="contained"
            color="info"
            sx={{ display: { xs: "none", md: "flex" }, mx: "5px" }}
          >
            Home
          </Button>

          <Button
            component={NavLink}
            to={"/about"}
            variant="contained"
            color="info"
            sx={{ display: { xs: "none", md: "flex" }, mx: "5px" }}
          >
            Register
          </Button>

          <Button
            component={NavLink}
            to={"/login"}
            variant="contained"
            color="info"
            sx={{ display: { xs: "none", md: "flex" }, mx: "5px" }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer
        openDrawer={openDrawer}
        handleDrawerClose={handleDrawerClose}
      />
    </>
  );
}
