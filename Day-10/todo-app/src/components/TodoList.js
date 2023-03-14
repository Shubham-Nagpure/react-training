const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  const pendingTodos = todos.filter((ele) => !ele.status);
  const completedTodos = todos.filter((ele) => ele.status);

  return (
    <div className="todo-list">
      <div className="pending">
        <div className="pending-header-title"><b>Pending</b></div>
        <div className="pending-list">
          <div className="text-center">
            {pendingTodos && pendingTodos.length ? "" : "No Task Here"}
          </div>

          {pendingTodos.map((todo) => (
            <div className="list-item" key={todo.id}>
              <div className="title">{todo.text}</div>
              <div className="action-button">
                <button
                  type="submit"
                  onClick={() => completeTodo(todo.id)}
                  className="button"
                >
                  completed
                </button>
                <button
                  type="submit"
                  onClick={() => deleteTodo(todo.id)}
                  className="button"
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="completed">
        <div className="completed-header-title"><b>Completed</b></div>
        <div className="completed-list">
          <div className="text-center">
            {completedTodos && completedTodos.length ? "" : "No Task Here"}
          </div>

          {completedTodos &&
            completedTodos.map((completedTodo) => (
              <div className="list-item" key={completedTodo.id}>
                <div className="title">{completedTodo.text}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
