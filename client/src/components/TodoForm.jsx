import { useState, useEffect } from "react";
import "./TodoForm.css";

export default function TodoForm({
  initialData,
  onSubmit,
  onCancel,
  isLoading,
  submitText = "Add TODO",
}) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [error, setError] = useState("");

  // Update state if initialData changes (e.g., when opening a different modal)
  useEffect(() => {
    setTitle(initialData?.title || "");
    setDescription(initialData?.description || "");
    setError("");
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    if (title.trim().length > 120) {
      setError("Title cannot exceed 120 characters");
      return;
    }

    if (description.trim().length > 1000) {
      setError("Description cannot exceed 1000 characters");
      return;
    }

    try {
      await onSubmit(title.trim(), description.trim());
      // Only clear if it's a new form (not editing)
      if (!initialData) {
        setTitle("");
        setDescription("");
      }
    } catch (err) {
      setError(err?.message || "Failed to save todo");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input
          id="title"
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isLoading}
          maxLength="120"
          autoFocus={!!initialData}
        />
        <small className="char-count">{title.length}/120</small>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description (optional)</label>
        <textarea
          id="description"
          placeholder="Add more details..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isLoading}
          maxLength="1000"
          rows="3"
        />
        <small className="char-count">{description.length}/1000</small>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="form-actions" style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
        {onCancel && (
          <button
            type="button"
            className="btn-cancel"
            onClick={onCancel}
            disabled={isLoading}
            style={{ flex: 1 }}
          >
            Cancel
          </button>
        )}
        <button type="submit" disabled={isLoading} className={initialData ? "btn-save" : "btn-add"} style={{ flex: 1 }}>
          {isLoading ? "Saving..." : submitText}
        </button>
      </div>
    </form>
  );
}
