import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.trim();

const api = API_BASE_URL
  ? axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    })
  : null;

const normalizeError = (error, fallbackMessage) => {
  return error.response?.data || { message: fallbackMessage };
};

const ensureApiConfigured = () => {
  if (!api) {
    throw {
      message:
        "Client config error: VITE_API_BASE_URL is missing. Check client/.env and restart the frontend dev server.",
    };
  }
};

const todoService = {
  /**
   * Fetch all todos
   * Request:  GET /api/todos
   * Response: 200 OK, body = Array of todo objects
   */
  getAllTodos: async () => {
    try {
      ensureApiConfigured();
      const response = await api.get("");
      return response.data;
    } catch (error) {
      throw normalizeError(error, "Failed to fetch todos");
    }
  },

  /**
   * Create a new todo
   * Request:  POST /api/todos    { title, description }
   * Response: 201 Created, body = created todo object
   */
  createTodo: async (title, description) => {
    try {
      ensureApiConfigured();
      const response = await api.post("", { title, description });
      return response.data;
    } catch (error) {
      throw normalizeError(error, "Failed to create todo");
    }
  },

  /**
   * Update an existing todo's title and description
   * Request:  PUT /api/todos/:id   { title, description }
   * Response: 200 OK, body = updated todo object
   */
  updateTodo: async (id, title, description) => {
    try {
      ensureApiConfigured();
      const response = await api.put(`/${id}`, {
        title,
        description,
      });
      return response.data;
    } catch (error) {
      throw normalizeError(error, "Failed to update todo");
    }
  },

  /**
   * Toggle the `done` boolean for a todo
   * Request:  PATCH /api/todos/:id/done
   * Response: 200 OK, body = updated todo object (with flipped `done`)
   */
  toggleTodoDone: async (id) => {
    try {
      ensureApiConfigured();
      const response = await api.patch(`/${id}/done`);
      return response.data;
    } catch (error) {
      throw normalizeError(error, "Failed to toggle todo status");
    }
  },

  /**
   * Delete a todo
   * Request:  DELETE /api/todos/:id
   * Response: 204 No Content (on success)
   * Returns: true on success; throws an error object on failure
   */
  deleteTodo: async (id) => {
    try {
      ensureApiConfigured();
      await api.delete(`/${id}`);
      return true;
    } catch (error) {
      throw normalizeError(error, "Failed to delete todo");
    }
  },
};

export default todoService;
