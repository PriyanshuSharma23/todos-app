import Todo from "../todo/todo";
import { todayDate } from "./date";
import TaskInput from "./inputbar";

function Main({ categories, todos, setTodos }) {
  const date = todayDate();

  return (
    <div className="w-full flex flex-col gap-1 items-center">
      {categories.map((category) => {
        if (category.selected) {
          return (
            <div key={category.id} className="w-full">
              <div className="text-2xl font-extrabold text-center">
                {category.name}
              </div>

              <div className="mx-auto">
                <TaskInput todos={todos} setTodos={setTodos} />
              </div>
              <div className="grid grid-cols-1 place-items-center px-5">
                {todos.map((todo) => {
                  switch (category.id) {
                    case "myday":
                      return todo.dueDate === date ? (
                        <div key={Math.random()} className="w-full">
                          <Todo todo={todo} todos={todos} setTodos={setTodos} />
                        </div>
                      ) : (
                        ""
                      );

                    case "important":
                      return (
                        todo.isImportant && (
                          <div key={Math.random()} className="w-full">
                            <Todo
                              todo={todo}
                              todos={todos}
                              setTodos={setTodos}
                            />
                          </div>
                        )
                      );

                    case "completed":
                      return (
                        todo.isDone && (
                          <div key={Math.random()} className="w-full">
                            <Todo
                              todo={todo}
                              todos={todos}
                              setTodos={setTodos}
                            />
                          </div>
                        )
                      );

                    default:
                      return (
                        <div key={Math.random()} className="w-full">
                          <Todo todo={todo} todos={todos} setTodos={setTodos} />
                        </div>
                      );
                  }
                })}
              </div>
            </div>
          );
        } else {
          return "";
        }
      })}

      {}
    </div>
  );
}

export default Main;
