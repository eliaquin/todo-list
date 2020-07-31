import React from "react";
import { makeStyles } from "@material-ui/styles";
import TodoItem from "./TodoItem";

function Todo() {
  const classes = useStyles();
  const [todoItems, setTodoItems] = React.useState([]);
  const [item, setItem] = React.useState("");
  const [showButton, setShowButton] = React.useState(false);
  const storageKey = "X-Token";

  React.useEffect(() => {
    var lsItems = localStorage.getItem(storageKey);
    if (!lsItems) return;
    const items = JSON.parse(lsItems);
    setTodoItems(items);
  }, []);

  React.useEffect(() => {
    const itemIsSelected = todoItems.some((el) => el.itemIsChecked === true);
    setShowButton(itemIsSelected);
  }, [todoItems]);

  const updateStorage = (obj) => {
    localStorage.setItem(storageKey, JSON.stringify(obj));
  };

  const addItem = (item) => {
    const items = [...todoItems, item];
    setTodoItems(items);
    setItem("");
    updateStorage(items);
  };

  const removeItem = (itemId) => {
    const items = [...todoItems];
    const result = items.filter((el) => el.text !== itemId);
    setTodoItems(result);
    updateStorage(result);
  };

  const toggleItem = (itemId) => {
    const items = [...todoItems];
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      if (element.text === itemId) {
        element.itemIsChecked = !element.itemIsChecked;
        setTodoItems(items);
        updateStorage(items);
        return;
      }
    }
  };

  const markSelectedAsCompleted = () => {
    const items = [...todoItems];
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      if (element.itemIsChecked) {
        element.itemIsCompleted = true;
        element.itemIsChecked = false;
      }
    }
    setTodoItems(items);
    updateStorage(items);
  };

  const handleKeyPress = (event) => {
    if (event.key !== "Enter") return;
    const itemExists = todoItems.some((el) => el.text === item);
    if (itemExists) return;
    const todoItem = {
      text: item,
      itemIsChecked: false,
      itemIsCompleted: false,
    };
    addItem(todoItem);
  };

  const renderTodoItems = () =>
    todoItems.map((item) => (
      <TodoItem
        key={item.text}
        text={item.text}
        itemIsChecked={item.itemIsChecked}
        itemIsCompleted={item.itemIsCompleted}
        onDeleteItem={removeItem}
        onToggleItem={toggleItem}
      />
    ));
  return (
    <div className={classes.root}>
      <div>
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
      {showButton && (
        <button
          className={classes.button}
          type="button"
          onClick={markSelectedAsCompleted}
        >
          Mark selected as completed
        </button>
      )}
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
  input: {
    padding: "16px 16px 16px 60px",
    border: "none",
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
    marginBottom: 10,
  },
  button: {
    height: 50,
    fontSize: 14,
    color: "white",
    backgroundColor: "#7952b3",
    border: "none",
    borderRadius: 5,
    marginTop: 30,
  },
}));

export default Todo;
