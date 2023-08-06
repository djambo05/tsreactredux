import { FC, useEffect } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";

const TodoList: FC = () => {
  const { todos, loading, error, limit, page } = useTypeSelector(
    (state) => state.todo
  );
  const { fetchTodos } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.name}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
