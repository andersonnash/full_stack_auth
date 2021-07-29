import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getAllTodos } from "../../Services/Todos";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      let data = await getAllTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);
  return (
    <Layout>
      {todos.map((todo) => (
        <div>{todo.name}</div>
      ))}
    </Layout>
  );
};

export default Home;
