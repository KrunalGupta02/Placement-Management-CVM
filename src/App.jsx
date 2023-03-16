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
import { Home } from "./Components/Home";
import { AdminLogin } from "./Components/AdminLogin";

function App() {
  return (
    <div className="App">
      <AdminLogin />
    </div>
  );
}

export default App;
