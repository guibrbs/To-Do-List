import { useState } from "react";
import { createTodoList } from "../../firebase-config";
import CloseButton from "../CloseButton";
import AddTodoInput from "./AddTodoInput";

const TodoListModal = ({ setOpenTodoListModal, todosQtt }) => {
  /*const buttonStyle = colorsSelector(todosQtt);*/
  const [listName, setListName] = useState("");
  const [todoMessage, setTodoMessage] = useState("");
  const [todos, setTodos] = useState([]);

  const handleCreateNewTodoList = async () => {
    await createTodoList(listName, todoMessage, false);
  };

  return (
    <div
      className="w-full fixed max-w-xl h-[33rem] top-[10%] bg-secondary rounded-3xl 
        flex flex-col items-center pt-28 px-20 gap-5 z-[2]"
    >
      <div className="w-full fixed max-w-xl h-20 top-[10%] bg-pink rounded-t-3xl flex items-center">
        <input
          className="ml-4 text-text font-bold text-3xl bg-pink border-b-[1px] focus:outline-none px-2
           placeholder:text-text"
          placeholder="Título"
          onChange={(e) => setListName(e.target.value)}
        />
      </div>
      <CloseButton onClick={() => setOpenTodoListModal(false)}/>
      <AddTodoInput setTodoMessage={setTodoMessage} handleCreateNewTodoList={handleCreateNewTodoList}/>
    </div>
  );
};

export default TodoListModal;
