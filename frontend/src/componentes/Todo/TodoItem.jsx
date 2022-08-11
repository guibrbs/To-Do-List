import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteTodoFromTodoList } from "../../firebase-config";

const TodoItem = ({ todo, todoTitle, setUpdateTodos, todoPos, editTodoMessage, editTodoState }) => {
  const { userDocID } = useContext(UserContext);
  const [disableInput, setDisableInput] = useState(true);
  const [todoIsDone, setTodoIsDone] = useState(todo.done);
  const [newTodoMessage, setNewTodoMessage] = useState(todo.message);

  const handleDeleteTodoFromTodoList = async (message, done) => {
    const messageToDelete = {
      message,
      done,
    };
    await deleteTodoFromTodoList(userDocID, todoTitle, messageToDelete);
    setUpdateTodos(true);
  };

  const handleCancelEditTodo = () => {
    setDisableInput(true);
    setNewTodoMessage(todo.message);
  };

  const handleConfirmEditTodo = () => {
    setDisableInput(true);
    editTodoMessage(newTodoMessage, todoPos);
  };

  const handleEditTodoState = () => {
    editTodoState(todoPos);
    setTodoIsDone(!todoIsDone);
  }

  return (
    <div
      className="text-text flex items-center w-full relative after:content-[''] after:absolute 
      after:w-full after:h-[1px] after:bg-secondaryLight after:-bottom-4 mb-8"
    >
      <input
        type="checkbox"
        className="w-5 h-5 mr-4 text-pink appearance-none
        rounded-full checked:bg-pink checked:ring-text checked:ring-1 border-text
        border checked:border-secondary checked:border-2 cursor-pointer"
        onClick={handleEditTodoState}
        checked={todoIsDone}
      />
      <input
        className={`font-light text-lg px-1 bg-secondary enabled:border-b enabled:focus:outline-none 
              ${todo.done && "text-textDarker line-through"}`}
        value={newTodoMessage}
        disabled={disableInput}
        onChange={(e) => setNewTodoMessage(e.target.value)}
      />
      <div className="flex ml-auto gap-4">
        <span
          className="material-symbols-outlined text-xl cursor-pointer 
          hover:brightness-90 transition-colors"
          onClick={() =>
            disableInput ? setDisableInput(false) : handleCancelEditTodo()
          }
        >
          {disableInput ? "edit" : "cancel"}
        </span>
        <span
          className="material-symbols-outlined text-xl cursor-pointer 
          hover:brightness-90 transition-colors"
          onClick={() =>
            disableInput
              ? handleDeleteTodoFromTodoList(todo.message, todo.done)
              : handleConfirmEditTodo()
          }
        >
          {disableInput ? "delete" : "check_circle"}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
