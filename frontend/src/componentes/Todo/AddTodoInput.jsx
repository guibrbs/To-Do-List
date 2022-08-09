const AddTodoInput = ({ setTodoMessage, handleCreateNewTodoList }) => {
  return (
    <div className="w-full relative flex items-center">
      <span className="material-symbols-outlined text-lg text-textDarker absolute">
        add_task
      </span>
      <input
        className="w-full bg-secondary border-b border-b-textDarker focus:outline-none px-7
        placeholder:font-light text-text text-lg"
        placeholder="Insira sua nova tarefa"
        onChange={(e) => setTodoMessage(e.target.value)}
      />
      <button className="absolute right-0" onClick={handleCreateNewTodoList}>
        <span className="material-symbols-outlined text-lg text-textDarker hover:text-text 
        transition-colors"
        
        >
          send
        </span>
      </button>
    </div>
  );
};

export default AddTodoInput;
