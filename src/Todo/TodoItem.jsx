import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Images } from "../assets";

function TodoItem(props) {
  const classes = useStyles();
  const { text, itemIsChecked, onDeleteItem, onToggleItem } = props;

  return (
    <div className={classes.root}>
      <div className={classes.checkText}>
        <div
          className={clsx(
            classes.roundCheck,
            itemIsChecked && classes.itemIsChecked
          )}
          onClick={() => {
            onToggleItem(text);
          }}
        >
          {itemIsChecked && <img src={Images.CheckSolid} alt="" width="14" />}
        </div>
        <div className={classes.text}>{text}</div>
      </div>
      <div
        className={classes.closeButton}
        onClick={() => {
          onDeleteItem(text);
        }}
      >
        <img src={Images.TimesSolid} alt="" width="14" />
      </div>
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
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    borderBottom: "1px solid lightgray",
    paddingRight: 4,
  },
  roundCheck: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: "50%",
    border: "1px solid lightgray",
    cursor: "pointer",
  },
  closeButton: {
    paddingTop: 10,
    cursor: "pointer",
  },
  checkText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    marginLeft: 10,
  },
  itemIsChecked: {
    borderColor: "#66bb6a",
  },
}));

export default TodoItem;
