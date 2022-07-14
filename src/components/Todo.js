import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiFileEditLine } from "react-icons/ri";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        key={todo.id}
        style={{ cursor: "pointer" }}
        onClick={() => completeTodo(todo.id)}
        class="link"
      >
        {todo.text}
      </div>
      <div className="icons">
        <AiFillCloseCircle
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
          onMouseOver={({ target }) => (target.style.color = "#DCD7C9")}
          onMouseOut={({ target }) => (target.style.color = "white")}
        />
        &nbsp;
        <RiFileEditLine
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
          onMouseOver={({ target }) => (target.style.color = "#DCD7C9")}
          onMouseOut={({ target }) => (target.style.color = "white")}
        />
      </div>
    </div>
  ));
};

export default Todo;
