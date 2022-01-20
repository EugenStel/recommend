import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./BodyComponent/BodyStyles";

export default function FooterComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant='body1' color='textSecondary' align='center'>
            Created by
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='body1' color='textSecondary' align='center'>
            All right reserved @Company 2021
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
