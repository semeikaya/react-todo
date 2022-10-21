import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Buy bananas",
      favorite: false,
    },
    {
      text: "Продать почку",
      favorite: false,
    },
    {
      text: "Слить катку",
      favorite: true,
    },
  ]);

  const [input, setInput] = useState("");

  function removeTodo(id) {
    const filtered = todos.filter((todo, index) => {
      if (index === id) {
        return false;
      }
      return true;
    });

    setTodos(filtered);
  }

  function makeMark(i) {
    const newTodos = todos.map((todo, index) => {
      if (i === index) {
        return { ...todo, favorite: !todo.favorite };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function addTodo() {
    setTodos([{ text: input, favorite: false }, ...todos]);
  }

  return (
    <div className="app">
      <Header />
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      <Todo todos={todos} makeMark={makeMark} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
