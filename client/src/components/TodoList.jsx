import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({
  todos,
  onUpdate,
  onToggleDone,
  onDelete,
  isLoading,
}) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No TODOs yet. Create one to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onUpdate={onUpdate}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}
