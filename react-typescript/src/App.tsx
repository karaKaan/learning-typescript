import { useEffect, useState } from "react";
import "./App.css";
import Input from "./app/components/Input/Input";
import Header from "./app/components/Header/Header";
import { Button } from "./app/components/Button/Button";

function App() {
  const [name, setName] = useState<string>();
  useEffect(() => {});

  return (
    <div className="App">
      <Header title="Welcome to the Best TODO-App" color="#000" />
      <div className="form-wrapper">
        <Input label="Task: " />
        <Input label="Description: " />
        <Input label="Deadline: " />
        <Button text="Save" bgColor="#C1FBA4" textColor="#373F47"/>
      </div>
    </div>
  );
}

export default App;
