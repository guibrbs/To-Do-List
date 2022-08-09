import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { addNewTodo, getTodoMessages } from "../../firebase-config";
import CloseButton from "../CloseButton";
import AddTodoInput from "./AddTodoInput";
import TodoMap from "./TodoMap";

const TodoListModal = ({ setOpenTodoListModal, todosQtt, todoTitle }) => {
  /*const buttonStyle = colorsSelector(todosQtt);*/
  const [todoMessage, setTodoMessage] = useState({});
  const [todos, setTodos] = useState([]);
  const [updateTodos, setUpdateTodos] = useState(true);
  const { userDocID } = useContext(UserContext);

  useEffect(() => {
    const fetchTodoContent = async () => {
      const data = await getTodoMessages(userDocID, todoTitle);
      setTodos(data.todos);
      console.log(data.todos);
    };
    if (updateTodos) {
      fetchTodoContent();
      setUpdateTodos(false);
    }
  }, [todoTitle, userDocID, updateTodos]);

  const handleSubmitNewTodo = async () => {
    await addNewTodo(userDocID, todoTitle, todoMessage);
    setUpdateTodos(true);
    setTodoMessage("");
  };

  return (
    <div
      className="w-full fixed max-w-xl h-[33rem] top-1/2 bg-secondary rounded-3xl 
        flex flex-col items-center pt-28 pb-8 px-20 gap-5 z-[2] translate-y-[-50%]"
    >
      <div className="w-full fixed max-w-xl h-20 top-0 bg-pink rounded-t-3xl flex items-center">
        <h1 className="ml-4 text-text font-bold text-3xl bg-pink px-2" >
          {todoTitle}
        </h1>
      </div>
      <CloseButton onClick={() => setOpenTodoListModal(false)} />
      <AddTodoInput
        setTodoMessage={setTodoMessage}
        handleSubmitNewTodo={handleSubmitNewTodo}
        todoMessage={todoMessage}
      />
      <TodoMap todos={todos} />
    </div>
  );
};

export default TodoListModal;
