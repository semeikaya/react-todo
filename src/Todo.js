import React from "react";

function Todo({ todos, removeTodo, makeMark }) {
  return (
    <div className="todos">
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            className={`todo ${todo.favorite ? "selected" : ""}`}
          >
            <div className="favorite">
              <button onClick={() => makeMark(index)}>❤</button>
            </div>
            <div className="todo-text">{todo.text}</div>
            <div className="actions">
              <button onClick={() => removeTodo(index)}>❌</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
