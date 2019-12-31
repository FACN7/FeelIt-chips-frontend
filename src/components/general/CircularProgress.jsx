import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    color: 'grey',      
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className="loading-div">
      <CircularProgress className={classes.root} size={'100%'} />
    </div>
  );
}
