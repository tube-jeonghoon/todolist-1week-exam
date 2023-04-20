import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "내용1",
    },
    {
      id: 2,
      content: "내용2",
    },
  ]);
  const [input, setInput] = useState("");

  const clickAddButton = () => {
    const newTodo = {
      id: todos.length + 1,
      content: input,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="todo-list-input-box">
          <input
            type="text"
            placeholder="할일을 입력하세요"
            onChange={inputChangeHandler}
            value={input}
          />
          <button onClick={clickAddButton}>추가하기</button>
        </div>
        <div className="todolist-title">Todo List</div>
      </div>
      <div className="todo-box">
        {todos.map((item) => {
          return (
            <div key={item.id} className="content-box">
              <div className="content-card">
                <div className="content">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
