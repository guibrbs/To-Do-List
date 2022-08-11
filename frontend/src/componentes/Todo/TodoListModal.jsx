import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { addNewTodo, getTodoMessages } from "../../firebase-config";
import CloseButton from "../CloseButton";
import AddTodoInput from "./AddTodoInput";
import TodoMap from "./TodoMap";
import { colorsSelector } from "../../utils/colorsSelector";

const TodoListModal = ({ setOpenTodoListModal, todosQtt, todoTitle, setUpdateTodoList }) => {
  /*const buttonStyle = colorsSelector(todosQtt);*/
  const [todos, setTodos] = useState([]);
  const [updateTodos, setUpdateTodos] = useState(true);
  const { userDocID } = useContext(UserContext);

  useEffect(() => {
    const fetchTodoContent = async () => {
      const data = await getTodoMessages(userDocID, todoTitle);
      setTodos(data.todos);
      setUpdateTodoList(true);
    };
    if (updateTodos) {
      fetchTodoContent();
      setUpdateTodos(false);
    }
  }, [todoTitle, userDocID, updateTodos, setUpdateTodoList]);

  const handleSubmitNewTodo = async (message) => {
    await addNewTodo(userDocID, todoTitle, {message, done: false});
    setUpdateTodos(true);
  };

  return (
    <div
      className="w-full fixed max-w-xl h-[33rem] top-1/2 bg-secondary rounded-3xl 
        flex flex-col items-center pt-28 pb-8 px-20 gap-5 z-[4] translate-y-[-50%]"
    >
      <div className={`w-full fixed max-w-xl h-20 top-0 rounded-t-3xl flex items-center`}
      style={{backgroundColor: colorsSelector(todosQtt)}}>
        <h1 className="ml-4 text-text font-bold text-3xl px-2" >
          {todoTitle}
        </h1>
      </div>
      <CloseButton onClick={() => setOpenTodoListModal(false)} />
      <AddTodoInput handleSubmitNewTodo={handleSubmitNewTodo}/>
      <TodoMap todos={todos} todoTitle={todoTitle} setUpdateTodos={setUpdateTodos}/>
    </div>
  );
};

export default TodoListModal;
