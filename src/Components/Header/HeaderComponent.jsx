import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "../BodyComponent/Dashboard/Dashboard";
import { MoviesComponent } from "../BodyComponent/movies/MoviesComponent";
import { BooksComponent } from "../BodyComponent/Books";
import { DrinksComponent } from "../BodyComponent/Drinks";
import { useStyles } from "./HeaderStyles";
import { LoginPage } from '../BodyComponent/Login'

export default function HeaderComponent() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Sidenav mobileOpen={mobileOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path='/movies' render={() => <MoviesComponent />} />
          <Route exact path='/login' render={() => <LoginPage />} />
          <Route exact path='/books' render={() => <BooksComponent />} />
          <Route exact path='/drinks' render={() => <DrinksComponent />} />
          <Route exact path='/' render={() => <Dashboard />} />
        </Switch>
      </Box>
    </div>
  );
}
