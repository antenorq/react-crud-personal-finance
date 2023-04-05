import { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PostAddIcon from "@mui/icons-material/PostAdd";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import CancelIcon from "@mui/icons-material/Cancel";
import { NavLink } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";
import { AuthContext } from "../context/AuthContext";

export default function TemporaryDrawer({ openDrawer, handleDrawerClose }) {
  //CONTEXT AUTH
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
  };

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

        <NavLink to="/income">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="INCOME" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to="/expense">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RemoveCircle color="error" />
              </ListItemIcon>
              <ListItemText primary="EXPENSE" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to="/category">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PostAddIcon color="info" />
              </ListItemIcon>
              <ListItemText primary="CATEGORY" />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <CancelIcon />
            </ListItemIcon>
            <ListItemText primary="EXIT" />
          </ListItemButton>
        </ListItem>
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
