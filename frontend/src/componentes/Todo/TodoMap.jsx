const TodoMap = ({todos}) => {    
    return (
        <div className="border w-full h-full">
            {todos.map((todo) => {
                return (
                    <p>{todo.message}</p>
                )
            })}
        </div>
    )
}

export default TodoMap;