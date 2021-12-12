import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdDoneAll, MdRemoveDone } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { todayDate } from "../main-section/date";

function Todo({ todo, todos, setTodos }) {
  const date = todayDate();
  function isPassed(date) {
    return todo.dueDate < date;
  }
  function handleDONE() {
    let newTodos = todos.map((t) => {
      if (t.name === todo.name) {
        return { ...t, isDone: !t.isDone };
      } else {
        return t;
      }
    });

    setTodos(newTodos);
  }

  function handleIMPORTANT() {
    let newTodos = todos.map((t) => {
      if (t.name === todo.name) {
        return { ...t, isImportant: !t.isImportant };
      } else {
        return t;
      }
    });

    setTodos(newTodos);
  }

  function handleDELETE() {
    let newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  }

  return (
    <div
      className={`bg-gray-200 p-3 w-full my-2 ${
        isPassed(date) ? "border border-red-300" : ""
      }`}
    >
      <div
        className={`${
          todo.isDone ? "line-through  text-gray-700 italic" : ""
        } text-2xl`}
      >
        {todo.name}
      </div>
      <div className="flex justify-between items-end">
        <button onClick={handleIMPORTANT} className="text-yellow-400 text-2xl">
          {todo.isImportant ? <AiFillStar /> : <AiOutlineStar />}
        </button>
        <button onClick={handleDONE} className="text-2xl text-blue-700">
          {!todo.isDone ? <MdDoneAll /> : <MdRemoveDone />}
        </button>
        <button className="text-red-600 text-2xl" onClick={handleDELETE}>
          <RiDeleteBin6Line />
        </button>
        <button className={`text-2xl ${isPassed(date) ? "text-red-500" : ""}`}>
          <span className={`font-bold`}> Due: </span>
          {todo.dueDate.replaceAll("-", "/")}{" "}
        </button>
      </div>
    </div>
  );
}

export default Todo;
