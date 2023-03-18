import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Signin } from "./Components/Signin";
import { Admin } from "./Components/Admin";
import Navbar from "./Components/Navbar";
import AdminMain from "./Components/AdminMain";
import StudentMain from "./Components/StudentMain";
import { StudentCrud } from "./Components/StudentCrud";
import AddRecruiter from "./Components/AddRecruiter";
import Companydetails from "./Components/companydetails";
import { Home } from "./Components/Home";
import { AdminLogin } from "./Components/AdminLogin";
import ListItems from "./Components/List";
import { Routes, Route } from "react-router-dom";
import ListStudent from "./Components/ListStudent";
import { PhoneSignUp } from "./Components/PhoneSignUp";
import { Login } from "./Components/Login";
import Records from "./Components/Records";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/studentmain" element={<StudentMain />} />
        <Route path="/adminmain" element={<AdminMain />} />
        <Route path="/approval" element={<Admin />} />
        <Route path="/addrecruiter" element={<AddRecruiter />} />
        <Route path="/companydetails" element={<Companydetails />} />
        <Route path="/studentcrud" element={<StudentCrud />} />
        <Route path="/phonesignup" element={<PhoneSignUp />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </div>
  );
}

export default App;
