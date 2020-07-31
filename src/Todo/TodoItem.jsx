import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

function TodoItem(props) {
  const classes = useStyles();
  const { text, itemIsChecked, onDeleteItem, onToggleItem } = props;

  return (
    <div>
      <div className={classes.roundCheck}></div>
      <div>{text}</div>
      <div className={classes.closeButton}></div>
    </div>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  itemIsChecked: PropTypes.bool.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};

const useStyles = makeStyles(() => ({
  root: {},
  roundCheck: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    border: "1px solid lightgray",
  },
  closeButton: {},
}));

export default TodoItem;
