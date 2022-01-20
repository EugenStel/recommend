import { makeStyles } from "@material-ui/core";
import { blue, grey, deepPurple, teal } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-end",
    backgroundColor: 'rgb(31,41,55)',
  },
  logo: {
    color: "white",
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px'
  },
  navlist: {
    minWidth: "600px"
    // maxWidth: "300px",
  },
  ulAvater: {
    backgroundColor: blue["A200"],
    color: "white",
  },
  navAvatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "35px",
    height: "35px",
  },

  //wrapper of main contianer
  wrapper: {
    minHeight: "100vh",
    height: "auto",
    background: "white",
    marginTop: "60px",
    padding: theme.spacing(2, 2, 0, 34),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2),
      marginTop: "45px",
    },
  },

  //Side nav
  drawerPaper: {
    width: "250px",
    color: 'white',
    backgroundColor: 'rgba(31,41,55,.9)',
    marginTop: "65px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  navlinks: {
    color: deepPurple['700'],
    "& :hover , &:hover div": {
      color: blue['300'],
    },
    " & div": {
      color: grey['50'],
    },
  },
  activeNavlinks: {
    color: grey['50'],
    "& div": {
      color: teal["500"],
    },
  },
  navButton: {
    width: " 100%",
    textTransform: "capitalize",
  },
}));
