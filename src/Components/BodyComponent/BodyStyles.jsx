import { makeStyles } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
export const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(3, 0),
  },
  responsiveImg: {
    width: " 100%",
    height: "auto",
  },
  cardImage: {
    maxHeight: "150px",
    overflowY: "hidden",
  },
  pageTitle: {
    color: blueGrey[800],
    marginBottom: theme.spacing(2),
    textTransform: "capitalize",
  },
  pageSubTitle: {
    color: blueGrey[500],
    margin: theme.spacing(1, 0),
    textTransform: "uppercase",
  },
  footer: {
    background: "#feffee",
    padding: theme.spacing(0, 0, 0, 33),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 1),
      marginTop: "45px",
    },
  },
}));
