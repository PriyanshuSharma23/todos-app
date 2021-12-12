import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { v4 } from "uuid";
import { todayDate } from "./date";

function TaskInput({ todos, setTodos }) {
  const todaysDate = todayDate();
  const [taskState, setTaskState] = useState("");
  const [date, setDate] = useState("");
  const [importantCheck, setImportantCheck] = useState(false);

  function starCheck() {
    setImportantCheck((prev) => !prev);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!taskState) {
      alert("Enter a task");
      return;
    }
    if (!date) {
      alert("Enter a date");
      return;
    }
    console.log(todaysDate)
    let newTask = {
      id: v4(),
      name: taskState,
      dueDate: date,
      isImportant: importantCheck,
      isDone: false,
    };

    setTodos((prev) => [...prev, newTask]);

    setTaskState("");
    setDate("");
  }

  return (
    <div className="mx-20">
      <form
        className="flex items-center gap-2 border-b justify-around w-full"
        onSubmit={handleSubmit}
      >
        <input
          className="px-3 py-1"
          type="text"
          placeholder="Enter your task"
          value={taskState}
          onChange={(e) => setTaskState(e.target.value)}
        />
        <input
          className="border-none"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className="text-yellow-300 text-2xl" onClick={starCheck}>
          {importantCheck ? <AiFillStar /> : <AiOutlineStar />}
        </div>
        <button className="text-4xl font-semibold text-blue-700">+</button>
      </form>
    </div>
  );
}

export default TaskInput;
