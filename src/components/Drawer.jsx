import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";
import Home from "@mui/icons-material/Home";

export default function TemporaryDrawer({ openDrawer, handleDrawerClose }) {
  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    >
      <List>
        <NavLink to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="HOME" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        {list()}
      </Drawer>
    </div>
  );
}
