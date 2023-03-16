import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Signin } from "./Components/Signin";
import { Admin } from "./Components/Admin";
import { Login } from "./Components/Login";
import Navbar from "./Components/Navbar";
import AdminMain from "./Components/AdminMain";
import { StudentMain } from "./Components/StudentMain";
import { StudentCrud } from "./Components/StudentCrud";
import AddRecruiter from "./Components/AddRecruiter";
import Companydetails from "./Components/companydetails";
import { useState } from "react";

function App() {
  const [approvedId, setApprovedId] = useState("");

  const getApprovedIdHandler = (id) => {
    console.log("Id of doc to be edited", id);
    setApprovedId("id", id);
  };
  return (
    <div className="App">
      <Companydetails />
    </div>
  );
}

export default App;
