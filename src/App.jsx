import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Signin } from "./Components/Signin";
import { Admin } from "./Components/Admin";
import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Admin />
      <Signin />
      <Login />
    </div>
  );
}

export default App;
