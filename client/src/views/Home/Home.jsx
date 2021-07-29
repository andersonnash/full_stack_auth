import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getAllTodos } from "../../Services/Todos";

const Home = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      let data = await getAllTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);
  return (
    <Layout user={props.user} setUser={props.setUser}>
      {todos.map((todo) => (
        <div>{todo.name}</div>
      ))}
    </Layout>
  );
};

export default Home;
