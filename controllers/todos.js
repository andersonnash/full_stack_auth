import Todo from "../models/todo.js";

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById();
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: "todo no found" });
    }
  } catch (error) {
    res.status(500), json({ error: error.message });
  }
};
