import api from "./apiConfig";

export const getAllTodos = async () => {
  try {
    const res = await api.get("/Todos");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createTodo = async (input) => {
  try {
    const res = await api.post("/Todos", input);
    console.log(res.data);
  } catch (error) {
    throw error;
  }
};
