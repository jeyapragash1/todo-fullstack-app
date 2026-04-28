import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import todoService from "./services/todoService";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      setError("");
      const data = await todoService.getAllTodos();
      // Ensure data is an array; if API returns wrapped object, extract array
      const todosArray = Array.isArray(data) ? data : data?.todos || [];
      setTodos(todosArray);
    } catch (err) {
      setError(err.message || "Failed to load todos");
      setTodos([]); // fallback to empty array on error
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTodo = async (title, description) => {
    try {
      setIsLoading(true);
      const newTodo = await todoService.createTodo(title, description);
      setTodos([newTodo, ...(Array.isArray(todos) ? todos : [])]);
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateTodo = async (id, title, description) => {
    try {
      setIsLoading(true);
      const updatedTodo = await todoService.updateTodo(id, title, description);
      setTodos(
        Array.isArray(todos)
          ? todos.map((todo) => (todo._id === id ? updatedTodo : todo))
          : [updatedTodo]
      );
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleDone = async (id) => {
    // 1. Save current state for potential rollback
    const previousTodos = [...todos];

    // 2. Optimistically update UI instantly
    setTodos(
      Array.isArray(todos)
        ? todos.map((todo) =>
            todo._id === id ? { ...todo, done: !todo.done } : todo
          )
        : []
    );

    try {
      // 3. Send API request in background
      const updatedTodo = await todoService.toggleTodoDone(id);
      // Ensure state is perfectly synced with server response
      setTodos((currentTodos) =>
        currentTodos.map((todo) => (todo._id === id ? updatedTodo : todo))
      );
    } catch (err) {
      // 4. Rollback on failure
      setTodos(previousTodos);
      setError(err.message || "Failed to update todo");
    }
  };

  const handleDeleteTodo = async (id) => {
    // 1. Save current state for rollback
    const previousTodos = [...todos];

    // 2. Optimistically remove from UI instantly
    setTodos(
      Array.isArray(todos) ? todos.filter((todo) => todo._id !== id) : []
    );

    try {
      // 3. Send API request in background (no loading spinner needed!)
      await todoService.deleteTodo(id);
    } catch (err) {
      // 4. Rollback on failure
      setTodos(previousTodos);
      setError(err.message || "Failed to delete todo");
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 TODO App</h1>
        <p>Stay organized with your personal task manager</p>
      </header>

      <main className="app-main">
        <div className="dashboard-layout">
          <aside className="dashboard-sidebar">
            <section className="form-section">
              <h2>Add a New TODO</h2>
              <TodoForm onSubmit={handleAddTodo} isLoading={isLoading} />
            </section>
          </aside>

          <section className="dashboard-content">
            {error && (
              <div className="error-banner">
                <span>{error}</span>
                <button onClick={() => setError("")} className="btn-close">
                  ✕
                </button>
              </div>
            )}
            <div className="list-section">
              <div className="list-header">
                <h2>Your TODOs</h2>
                {todos.length > 0 && (
                  <span className="todo-count">
                    {todos.filter((t) => !t.done).length} of {todos.length} left
                  </span>
                )}
              </div>
              {isLoading && todos.length === 0 ? (
                <div className="loading">Loading TODOs...</div>
              ) : (
                <TodoList
                  todos={todos}
                  onUpdate={handleUpdateTodo}
                  onToggleDone={handleToggleDone}
                  onDelete={handleDeleteTodo}
                  isLoading={isLoading}
                />
              )}
            </div>
          </section>
        </div>
      </main>

      <footer className="app-footer">
        <p></p>
      </footer>
    </div>
  );
}

export default App;
