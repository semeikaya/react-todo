import React from "react";

function Form({ input, setInput, addTodo }) {
  return (
    <div className="form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Form;
