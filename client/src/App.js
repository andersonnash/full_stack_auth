import { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import SignUp from "./views/SignUp/SignUp";
import SignIn from "./views/SignIn/SignIn";
import NewTodo from "./views/NewTodo/NewTodo";
import { verify } from "./Services/users";
import { Switch } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyuser = async () => {
      setUser(await verify());
    };
    verifyuser();
  }, []);

  return (
    <div className="App">
      {/* // route for all todos */}
      <Switch>
        <Route exact path="/">
          <Home user={user} setUser={setUser} />
        </Route>
        {/* //route for single todo  */}
        {/* //route for create todo  */}
        <Route path="/new-todo">
          <NewTodo user={user} setUser={setUser} />
        </Route>
        {/* //route for login  */}
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        {/* //route for sign-up  */}
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
