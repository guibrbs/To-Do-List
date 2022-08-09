import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { addNewTodo } from "../../firebase-config";
import CloseButton from "../CloseButton";
import AddTodoInput from "./AddTodoInput";
import TodoMap from "./TodoMap";

const TodoListModal = ({
  setOpenTodoListModal,
  todosQtt,
  todoTitle,
  setTodoTitle
}) => {
  /*const buttonStyle = colorsSelector(todosQtt);*/
  const [todoMessage, setTodoMessage] = useState({});
  const [todos, setTodos] = useState([]);
  const { userDocID } = useContext(UserContext);

  const handleSubmitNewTodo = async () => {
    await addNewTodo(userDocID, todoTitle, todoMessage);
    setTodoMessage("");
  };

  return (
    <div
      className="w-full fixed max-w-xl h-[33rem] top-1/2 bg-secondary rounded-3xl 
        flex flex-col items-center pt-28 pb-8 px-20 gap-5 z-[2] translate-y-[-50%]"
    >
      <div className="w-full fixed max-w-xl h-20 top-0 bg-pink rounded-t-3xl flex items-center">
        <input
          className="ml-4 text-text font-bold text-3xl bg-pink border-b-[1px] focus:outline-none px-2
           placeholder:text-text"
          placeholder={"Título"}
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      </div>
      <CloseButton onClick={() => setOpenTodoListModal(false)} />
      <AddTodoInput
        setTodoMessage={setTodoMessage}
        handleSubmitNewTodo={handleSubmitNewTodo}
        todoMessage={todoMessage}
      />
      <TodoMap />
    </div>
  );
};

export default TodoListModal;
