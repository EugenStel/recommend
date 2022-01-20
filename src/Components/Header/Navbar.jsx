import React from "react";
import {AppBar,Box,Hidden,IconButton,Toolbar} from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import MenuIcon from "@material-ui/icons/Menu";
import { UserMenu } from "../BodyComponent/NavbarComponent/UserMenu";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/user/userSelectors";
import {UserLoginButton} from '../BodyComponent/NavbarComponent/UserLoginButton'

export default function Navbar({ handleDrawerOpen }) {
  const classes = useStyles();
  const { user } = useSelector(getUser);

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Box style={{ display: "flex", marginRight: '20px', alignItems: 'center' }}>
            {user !== null ? <UserMenu /> : <UserLoginButton />}
        </Box>
        <Hidden mdUp>
          <IconButton color='inherit' onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
