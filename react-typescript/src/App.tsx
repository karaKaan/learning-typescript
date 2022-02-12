import { useEffect, useState } from "react";
import "./App.css";
import Input from "./app/components/Input/Input";
import Header from "./app/components/Header/Header";
import { Button } from "./app/components/Button/Button";
import { isTemplateHead } from "typescript";
import Todo from "./app/components/Todo/Todo";

export interface todoObj {
  task: string;
  description?: string;
  deadline?: string;
}

export interface todoArr{}

function App() {
  const [todo, setTodo] = useState<todoObj>({ task: "" });
  const [todoList, setTodoList] = useState<Array<todoObj>>([])

  useEffect(() => {
    const item = localStorage.getItem("todoList")
    
    
    
    
  })

  function addToObject(key: string, value: string): void {
    setTodo({ ...todo, [key]: value });
    
  }

  function saveTodo() {
    setTodoList([...todoList, todo])
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }
  function deleteItem(key:number){
    todoList.splice(key,1)
    setTodoList([...todoList])
  }

  return (
    <div className="app-wrapper">
    <section className="App">
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
    </section>
    <section className="right">
      {todoList.length > 0 && (
        <div>
        
        <h1>Your Todo</h1>
        {todoList.map((item, key) => (
          <Todo key={key} task={item.task} description={item.description} deadline={item.deadline} click={() => deleteItem(key)}/>
        ))}
        </div>
      )
}
    </section>  
    </div>
  );
}

export default App;
