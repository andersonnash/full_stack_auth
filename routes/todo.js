import { Router } from "express";
import restrict from "../helpers/restrict.js";
import { getAllTodos, createTodo, getTodo } from "../controllers/todos.js";

const router = Router();

export default router;
// get all todos
router.get("/todos", getAllTodos);
//get id todo
// router.get("/todos/:id", getTodo);
// //post createtodo
router.post("/todos", restrict, createTodo);
// //put updatetodo
// router.put("/todos/:id", restrict, updateTodo);
// //delete todo
// router.delete("/todos:id", restrict, deleteTodo);
