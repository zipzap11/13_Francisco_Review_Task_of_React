import React, { useState } from "react";
import Modal from "./Modal";
import classes from "./TodoForm.module.css";

function TodoForm({ onAddTodo, onCheckSameElement }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function changeHandler(e) {
    setTodoTitle(e.target.value);
  }

  function confirmHandler() {
    onAddTodo(todoTitle);
    setIsModalOpen(false);
    setTodoTitle("");
  }

  function cancelHandler() {
    setIsModalOpen(false);
    setTodoTitle("");
  }

  function submitHandler(e) {
    e.preventDefault();
    if (todoTitle.trim().length === 0) {
      alert("Title can't be Empty !");
      return;
    } else if (onCheckSameElement(todoTitle)) {
      setIsModalOpen(true);
      return;
    }
    onAddTodo(todoTitle);
    setTodoTitle("");
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          message="Todo with same title already exist, keep adding ?"
          onClose={cancelHandler}
          onConfirm={confirmHandler}
        />
      )}
      <div className={classes.contain}>
        <form onSubmit={submitHandler}>
          <input
            value={todoTitle}
            onChange={changeHandler}
            type="text"
            placeholder="Add todo..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
