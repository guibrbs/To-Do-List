import { useContext, useEffect, useState } from "react";
import LoadingScreen from "../componentes/LoadingScreen";
import CreateTodoListModal from "../componentes/Todo/CreateTodoListModal";
import TodoListModal from "../componentes/Todo/TodoListModal";
import { UserContext } from "../context/UserContext";
import { auth, getUserInfo } from "../firebase-config";
import { getFirstName } from "../utils/getFirstName";

const Homepage = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [openCreateTodoListModal, setOpenCreateTodoListModal] = useState(false);
  const [openTodoListModal, setOpenTodoListModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [todoTitle, setTodoTitle] = useState("");
  const { user, setUserDocID } = useContext(UserContext);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getUserInfo(user.email);
      setUserDocID(data.userDocID);
      setUserFirstName(getFirstName(data.name));
      setLoading(false);
    };
    fetchUserInfo();
  }, [user, setUserDocID]);

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="flex flex-col w-full h-screen items-center relative">
      {(openCreateTodoListModal || openTodoListModal) && (
        <>
          <div className="w-full h-full bg-[#000] bg-opacity-60 absolute z-[1]" />
          {openCreateTodoListModal && (
            <CreateTodoListModal
              setOpenCreateTodoListModal={setOpenCreateTodoListModal}
              setOpenTodoListModal={setOpenTodoListModal}
              setTodoTitle={setTodoTitle}
            />
          )}
          {openTodoListModal && (
            <TodoListModal
              setOpenTodoListModal={setOpenTodoListModal}
              todoTitle={todoTitle}
              setTodoTitle={setTodoTitle}
            />
          )}
        </>
      )}
      <button
        className="text-text flex gap-1 items-center absolute z-0 top-12 right-24"
        onClick={() => auth.signOut()}
      >
        Sair
        <span className="material-symbols-outlined text-xl">logout</span>
      </button>
      <div className="w-full max-w-4xl text-text mt-32">
        <h1 className="font-bold text-4xl mb-2">Olá, {userFirstName}</h1>
        <h2 className="font-light text-textDarker text-2xl mb-14">
          O que temos para hoje?
        </h2>
        <button
          className="w-48 h-28 rounded-3xl border border-textDarker bg-[#16161E]
         hover:bg-background transition-colors"
          onClick={() => setOpenCreateTodoListModal(true)}
        >
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
