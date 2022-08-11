import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteTodoFromTodoList } from "../../firebase-config";

const TodoMap = ({ todos, todoTitle, setUpdateTodos }) => {
  const {userDocID} = useContext(UserContext);
  const handleDeleteTodoFromTodoList = async (message, done) => {
    const messageToDelete = {
      message,
      done
    }
    await deleteTodoFromTodoList(userDocID, todoTitle, messageToDelete);
    setUpdateTodos(true);
  }
  return (
    <div className="w-full h-full">
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            className="text-text flex items-center w-full relative after:content-[''] after:absolute 
            after:w-full after:h-[1px] after:bg-secondaryLight after:-bottom-4 mb-8"
          >
            <input
              type="checkbox"
              className="w-5 h-5 mr-4 text-pink appearance-none
                         rounded-full checked:bg-pink checked:ring-text checked:ring-1 border-text
                         border checked:border-secondary checked:border-2 cursor-pointer"
              onClick={() => {}}
            />
            <p className={`font-light text-lg ${todo.done && "text-textDarker line-through"}`}>
              {todo.message}
            </p>
            <div className="flex ml-auto gap-4">
              <span
                className="material-symbols-outlined text-xl cursor-pointer 
              hover:brightness-90 transition-colors"
              >
                edit
              </span>
              <span
                className="material-symbols-outlined text-xl cursor-pointer 
              hover:brightness-90 transition-colors"
              onClick={() => handleDeleteTodoFromTodoList(todo.message, todo.done)}
              >
                delete
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoMap;
