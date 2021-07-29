import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import SignUp from "./views/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      {/* // route for all todos */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* //route for single todo  */}
      {/* //route for create todo  */}
      {/* //route for login  */}
      {/* //route for sign-up  */}
      <Route path="/sign-up">
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
