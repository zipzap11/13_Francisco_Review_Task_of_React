import React from "react";
import Todo from "./Todo";

function TodoList({ todo, onRemoveTodo, onCheckTodo }) {
  if (todo.length === 0) {
    return (
      <h3
        style={{
          textAlign: "center",
          fontFamily: "'Fira Sans', sans-serif",
          color: "#1d3557",
          letterSpacing: "2px",
          fontSize: "18px",
        }}
      >
        Nothing to do :)
      </h3>
    );
  }
  return (
    <ul
      style={{
        listStyle: "none",
        padding: "0",
        width: "60%",
        margin: "25px auto",
        maxHeight: "400px",
        overflow: "auto",
        paddingRight: "10px",
      }}
    >
      {todo.map((el) => {
        return (
          <Todo
            key={el.id}
            id={el.id}
            title={el.title}
            completed={el.completed}
            onRemoveTodo={onRemoveTodo}
            onCheckTodo={onCheckTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
