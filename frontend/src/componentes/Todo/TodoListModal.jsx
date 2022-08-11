import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { addNewTodo, getTodoMessages, updateTodoItems } from "../../firebase-config";
import CloseButton from "../CloseButton";
import AddTodoInput from "./AddTodoInput";
import { colorsSelector } from "../../utils/colorsSelector";
import TodoItem from "./TodoItem";

const TodoListModal = ({
  setOpenTodoListModal,
  colorPosition,
  todoTitle,
  setUpdateTodoList,
}) => {
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
    await addNewTodo(userDocID, todoTitle, { message, done: false });
    setUpdateTodos(true);
  };

  const editTodoMessage = async (newTodoMessage, todoPos) => {
    const newTodosArray = todos.map((todo, index) => {
      if(index === todoPos){
        todo.message = newTodoMessage;
      }
      return todo;
    });
    await updateTodoItems(userDocID, todoTitle, newTodosArray);
  }

  const editTodoState = async (todoPos) => {
    const newTodosArray = todos.map((todo, index) => {
      if(index === todoPos){
        todo.done = !todo.done;
      }
      return todo;
    });
    await updateTodoItems(userDocID, todoTitle, newTodosArray);
    setUpdateTodoList(true);
  }

  return (
    <div
      className="w-full fixed max-w-xl h-[33rem] top-1/2 bg-secondary rounded-3xl 
        flex flex-col items-center pt-28 pb-8 px-20 gap-5 z-[4] translate-y-[-50%]"
    >
      <div
        className={`w-full fixed max-w-xl h-20 top-0 rounded-t-3xl flex items-center`}
        style={{ backgroundColor: colorsSelector(colorPosition) }}
      >
        <h1 className="ml-4 text-text font-bold text-3xl px-2">{todoTitle}</h1>
      </div>
      <CloseButton onClick={() => setOpenTodoListModal(false)} />
      <AddTodoInput handleSubmitNewTodo={handleSubmitNewTodo} />
      <div className="w-full h-full">
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            todoTitle={todoTitle}
            setUpdateTodos={setUpdateTodos}
            todoPos={index}
            editTodoMessage={editTodoMessage}
            editTodoState={editTodoState}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoListModal;
