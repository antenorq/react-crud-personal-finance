import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function TemporaryDrawer(props) {
  const [state, setState] = useState(props.openDrawer);

  useEffect(() => {
    console.log("state: " + state, "/ props-openDrawer: " + props.openDrawer);
    if (props.openDrawer === true) {
      handleDrawerOpen();
    }

    if (props.openDrawer === false) {
      handleDrawerClose();
    }
  });

  const handleDrawerOpen = () => {
    setState(true);
  };

  const handleDrawerClose = () => {
    setState(false);
    props.setOpenDrawerParent();
  };

  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    >
      <List>
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
      <React.Fragment>
        {/*
        <Button
          color="error"
          variant="contained"
          onClick={handleDrawerOpen}
          sx={{ mt: 4 }}
        >
          BOTAO DENTRO DO DRAWER COMPONENT
        </Button>
      */}
        <Drawer anchor="left" open={state} onClose={handleDrawerClose}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
