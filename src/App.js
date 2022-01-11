import { useEffect, useState } from "react";
import "./App.css";

import { BsFillSunFill } from "react-icons/bs";
import { AiFillStar, AiOutlineCheckCircle, AiFillHome } from "react-icons/ai";

import SideBar from "./components/sidebar/sidebar";
import Main from "./components/main-section/main";

function App() {
  const [categories, setCategories] = useState([
    {
      name: "My Day",
      id: "myday",
      selected: true,
      icon: <BsFillSunFill />,
    },
    {
      name: "Important",
      id: "important",
      selected: false,
      icon: <AiFillStar />,
    },
    {
      name: "Completed",
      id: "completed",
      selected: false,
      icon: <AiOutlineCheckCircle />,
    },
    {
      name: "Tasks",
      id: "tasks",
      selected: false,
      icon: <AiFillHome />,
    },
  ]);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const exsistingTodos = JSON.parse(localStorage?.getItem("todos"));
    setTodos(exsistingTodos);
    localStorage.clear();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <div className="flex">
        <SideBar categories={categories} setCategories={setCategories} />
        <Main categories={categories} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
