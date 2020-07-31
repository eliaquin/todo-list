import React from "react";
import { makeStyles } from "@material-ui/styles";
import TodoItem from "./TodoItem";

function Todo() {
  const classes = useStyles();
  const [todoItems, setTodoItems] = React.useState([]);
  const [item, setItem] = React.useState("");

  const addItem = (item) => {
    const items = [...todoItems, item];
    setTodoItems(items);
    setItem("");
  };

  const removeItem = (itemId) => {
    const items = [...todoItems];
    const result = items.filter((el) => el.text !== itemId);
    setTodoItems(result);
  };

  const toggleItem = (itemId) => {
    const items = [...todoItems];
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      if (element.text === itemId) {
        element.itemIsChecked = !element.itemIsChecked;
        setTodoItems(items);
        return;
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key !== "Enter") return;
    const todoItem = {
      text: item,
      itemIsChecked: false,
      id: todoItems.length + 1,
    };
    addItem(todoItem);
  };

  const renderTodoItems = () =>
    todoItems.map((item) => (
      <TodoItem
        key={item.text}
        text={item.text}
        itemIsChecked={item.itemIsChecked}
        onDeleteItem={removeItem}
        onToggleItem={toggleItem}
      />
    ));
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <input
          className={classes.input}
          type="text"
          placeholder="What needs to be done?"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        {renderTodoItems()}
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
  wrapper: {},
  input: {
    padding: "16px 16px 16px 60px",
    border: "none",
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
  },
}));

export default Todo;
