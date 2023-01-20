import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "../components/Drawer";
import { useState } from "react";

export default function AreaAppBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ borderRadius: 1, bgcolor: "primary" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PERSONAL FINANCE
          </Typography>
          <Button color="inherit" onClick={handleDrawerOpen}>
            ABRIR DRAWER
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer
        openDrawer={openDrawer}
        handleDrawerClose={handleDrawerClose}
      />
    </Box>
  );
}
