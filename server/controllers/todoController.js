const mongoose = require("mongoose");
const Todo = require("../models/Todo");

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch todos" });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = await Todo.create({
      title: title.trim(),
      description: description?.trim() || "",
    });

    return res.status(201).json(todo);
  } catch (error) {
    return res.status(500).json({ message: "Failed to create todo" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid todo id" });
    }

    if (!title || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {
        title: title.trim(),
        description: description?.trim() || "",
      },
      { returnDocument: "after", runValidators: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json(updatedTodo);
  } catch (error) {
    return res.status(500).json({ message: "Failed to update todo" });
  }
};

const toggleTodoDone = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid todo id" });
    }

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.done = !todo.done;
    await todo.save();

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ message: "Failed to toggle todo status" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid todo id" });
    }

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete todo" });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodoDone,
  deleteTodo,
};
