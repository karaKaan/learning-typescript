import { useEffect, useState } from "react";
import "./App.css";
import Input from "./app/components/Input/Input";
import Header from "./app/components/Header/Header";
import { Button } from "./app/components/Button/Button";

export interface todoObj {
  task: string;
  description?: string;
  deadline?: string;
}

export interface todoArr{}

function App() {
  const [todo, setTodo] = useState<todoObj>({ task: "" });
  const [todoList, setTodoList] = useState<Array<todoObj>>([])

  function addToObject(key: string, value: string): void {
    setTodo({ ...todo, [key]: value });
    
  }

  function saveTodo() {
    todoList.push(todo)
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  return (
    <div className="App">
      <Header title="Welcome to the Best TODO-App" color="#000" />
      <div className="form-wrapper">
        <Input
          label="Task*"
          onChange={(e) => addToObject("task", e.target.value)}
        />
        <Input
          label="Description"
          onChange={(e) => addToObject("description", e.target.value)}
        />
        <Input
          label="Deadline"
          onChange={(e) => addToObject("deadline", e.target.value)}
        />
        <Button text="Save" bgColor="#C1FBA4" textColor="#373F47" click={() => {saveTodo()}}/>
      </div>
    </div>
  );
}

export default App;
