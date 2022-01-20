import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Button } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';

import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyles";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashobard", link: "/", icon: <DashboardIcon /> },
    { label: "Movies", link: "/movies", icon: <VideocamOutlinedIcon /> },
    { label: "Books", link: "/books", icon: <MenuBookIcon /> },
    { label: "Drinks", link: "/drinks", icon: <NightlifeOutlinedIcon /> },
  ];
  return (
    <List>
      {listItemData.map((item, i) => (
        <Button size='small' className={classes.navButton} onClick={() => handleDrawerClose()} key={i}>
          <ListItem
            exact
            component={NavLink}
            to={item.link}
            className={classes.navlinks}
            activeClassName={classes.activeNavlinks}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
