import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { createTodoList } from "../../firebase-config";
import CloseButton from "../CloseButton";

const CreateTodoListModal = ({
  setOpenCreateTodoListModal,
  setOpenTodoListModal,
  setTodoTitle,
  setUpdateTodoList,
  setTodosQtt,
  todosQtt
}) => {
  const [todoListName, setTodoListName] = useState("");
  const { userDocID } = useContext(UserContext);

  const handleCreateNewTodoList = async () => {
    const response = await createTodoList(todoListName, userDocID);
    if (response) {
      setOpenCreateTodoListModal(false);
      setTodoTitle(todoListName);
      setOpenTodoListModal(true);
      setUpdateTodoList(true);
      setTodosQtt(() => (todosQtt+1))
    }
  };

  return (
    <div
      className="w-full max-w-xl h-56 bg-secondary fixed top-1/2 translate-y-[-50%] rounded-3xl
        flex items-center justify-center z-10 flex-col gap-6"
    >
      <CloseButton onClick={() => setOpenCreateTodoListModal(false)} />
      <div className="flex">
        <p className="text-text font-semibold mr-3">Nome da lista:</p>
        <input
          type="text"
          className="bg-secondary border-b border-b-textDarker 
                focus:outline-none text-text w-80 px-1"
          placeholder="Ex: Faculdade"
          onChange={(e) => setTodoListName(e.target.value)}
        />
      </div>
      <button
        className="border border-secondaryLight px-11 py-2 text-text font-bold rounded-lg
       hover:bg-secondaryLight transition-colors"
        onClick={handleCreateNewTodoList}
      >
        Criar
      </button>
    </div>
  );
};

export default CreateTodoListModal;
