import React from "react";
import { makeStyles } from "@material-ui/styles";

function Todo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <input
          className={classes.input}
          type="text"
          placeholder="What needs to be done?"
        />
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 40,
  },
  wrapper: {
  },
  input: {
    padding: "16px 16px 16px 60px",
    border: 'none',
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
  },
}));

export default Todo;
