import { formatTasksDone, getTasksDone } from "../../utils/formatTasksDone";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { colorsSelector } from "../../utils/colorsSelector";

const TodoListContainer = ({
  allTodoList,
  todosQtt,
  setOpenTodoListModal,
  setTodoTitle,
  setTodosQtt
}) => {
  const handleOpenTodoList = (todoTitle, index) => {
    setTodoTitle(todoTitle)
    setOpenTodoListModal(true);
    setTodosQtt(index)
  }
  return allTodoList.map((todoList, index) => {
    return (
      <div
        className="w-56 h-52 bg-secondary rounded-[2rem] p-7 relative drop-shadow-xl cursor-pointer
        hover:scale-105 transition-transform z-[1]"
        key={index}
        onClick={() => handleOpenTodoList(todoList.listName, index)}
      >
        <button className="absolute z-10 right-6 top-4">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
        <div
          className="w-full h-20  absolute top-0 left-0 rounded-t-[2rem]"
          style={{ backgroundColor: colorsSelector(index) }}
        />
        <div className="mt-[6.5rem]">
          <h1 className="text-2xl font-bold">{todoList.listName}</h1>
        </div>
        <p className="text-textDarker">{formatTasksDone(todoList.todos)}</p>
        {todoList.todos.length !== 0 && (
          <CircularProgressbar
            value={getTasksDone(todoList.todos)}
            maxValue={todoList.todos.length}
            className="h-9 absolute bottom-6 -right-16"
            strokeWidth={12}
            styles={buildStyles({
              pathColor: colorsSelector(todosQtt),
              trailColor: "#292A37",
            })}
          />
        )}
      </div>
    );
  });
};

export default TodoListContainer;
