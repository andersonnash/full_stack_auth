import { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import SignUp from "./views/SignUp/SignUp";
import SignIn from "./views/SignIn/SignIn";
import { verify } from "./Services/users";

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
      <Route exact path="/">
        <Home />
      </Route>
      {/* //route for single todo  */}
      {/* //route for create todo  */}
      {/* //route for login  */}
      <Route path="/sign-in">
        <SignIn setUser={setUser} />
      </Route>
      {/* //route for sign-up  */}
      <Route path="/sign-up">
        <SignUp setUser={setUser} />
      </Route>
    </div>
  );
}

export default App;
