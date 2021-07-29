import React from "react";
import Layout from "../../components/Layout/Layout";
import { signIn } from "../../Services/users";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const SignIn = (props) => {
  const [input, setInput] = useState({ email: "", password: "" });
  const { setUser } = props;
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signIn(input);
    console.log(user);
    setUser(user);
    history.push();
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };
  return (
    <div>
      SignUp
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          id="email"
          type="email"
          value={input.username}
          onChange={handleInput}
        />
        <label>Password</label>
        <input
          id="password"
          type="password"
          value={input.password}
          onChange={handleInput}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
