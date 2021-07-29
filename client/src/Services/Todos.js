import api from "./apiConfig";

export const getAllTodos = async () => {
  try {
    const res = await api.get("/Todos");
    return res.data;
  } catch (error) {
    throw error;
  }
};
