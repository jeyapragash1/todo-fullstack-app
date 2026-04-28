import { useState } from "react";
import Modal from "./Modal";
import ConfirmModal from "./ConfirmModal";
import TodoForm from "./TodoForm";
import "./TodoItem.css";

export default function TodoItem({
  todo,
  onUpdate,
  onToggleDone,
  onDelete,
  isLoading,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveEdit = async (title, description) => {
    await onUpdate(todo._id, title, description);
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    if (isLoading) return;
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsConfirmOpen(false);
    await onDelete(todo._id);
  };

  const handleCancelDelete = () => setIsConfirmOpen(false);

  return (
    <>
      <div className={`todo-item ${todo.done ? "done" : ""}`}>
        <div
          className="todo-content"
          onClick={handleOpenModal}
          style={{ cursor: "pointer" }}
        >
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggleDone(todo._id)}
            disabled={isLoading}
            className="checkbox"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="todo-text">
            <h3 className="todo-title">{todo.title}</h3>
            {todo.description && (
              <p className="todo-description">{todo.description}</p>
            )}
          </div>
        </div>

        <div className="todo-actions">
          <button
            className="btn-edit"
            onClick={handleOpenModal}
            disabled={isLoading}
          >
            Edit
          </button>
          <button
            className="btn-delete"
            onClick={handleDelete}
            disabled={isLoading}
          >
            Delete
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Edit TODO"
      >
        <TodoForm
          initialData={{ title: todo.title, description: todo.description }}
          onSubmit={handleSaveEdit}
          onCancel={handleCloseModal}
          isLoading={isLoading}
          submitText="Save Changes"
        />
      </Modal>

      <ConfirmModal
        isOpen={isConfirmOpen}
        message="Are you sure you want to delete this todo? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        isLoading={isLoading}
      />
    </>
  );
}