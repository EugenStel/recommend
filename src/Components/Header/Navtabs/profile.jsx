import React from "react";
import {Avatar} from "@material-ui/core";
import image from "./unnamed.jpg";
import { useStyles } from "../HeaderStyles";

export default function Profile() {
  const classes = useStyles();
  return (
    <Avatar src={image} className={classes.navAvatar}></Avatar>
  );
}
