import React, { useState } from "react";
import Modal from "./Modal";
import classes from "./Todo.module.css";

function Todo({ completed, title, onRemoveTodo, id }) {
  const [checked, setChecked] = useState(completed);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function changeHandler() {
    setChecked((prev) => !prev);
  }

  function confirmHandler() {
    onRemoveTodo(id);
  }

  function deleteHandler() {
    if (!checked) {
      setIsModalOpen(true);
    } else {
      onRemoveTodo(id);
    }
  }

  const textClass = checked ? classes.completed : classes.incomplete;

  return (
    <React.Fragment>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onConfirm={confirmHandler}
          message="Are you sure ? you haven't finished it yet."
        />
      )}
      <li className={classes.list}>
        <input checked={checked} onChange={changeHandler} type="checkbox" />
        <p className={textClass}>{title}</p>
        <button onClick={deleteHandler}>Delete</button>
      </li>
    </React.Fragment>
  );
}

export default Todo;
