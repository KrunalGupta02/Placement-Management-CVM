import React, { useState } from "react";

import { db } from "../../firebase";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link, Navigate, useNavigate } from "react-router-dom";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  doc,
} from "firebase/firestore";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [batch, setBatch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [skills, setSkills] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "approvedUser", email);
      await setDoc(userRef, {
        email: email,
        password: password,
        name: name,
        branch: branch,
        batch: batch,
        cgpa: cgpa,
        skills: skills,
        file: file,
      });
      Navigate("/login");
      console.log(userRef.id);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="p-4 box student-signin">
        <h2 className="mb-3">Student SignUp Form</h2>

        <Form onSubmit={handleSubmit} className="student-signin-form">
          <Row className="mb-3">
            <FloatingLabel as={Col} controlId="floatingEmail" label="Email">
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              as={Col}
              controlId="floatingPassword"
              label="Password"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel as={Col} controlId="floatingId" label="Student Id">
              <Form.Control
                type="number"
                placeholder="Enter your Student Id"
                onChange={(e) => setName(e.target.value)}
              />
            </FloatingLabel>
          </Row>

          <Row className="mb-3">
            <FloatingLabel as={Col} controlId="floatingName" label="Name">
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel as={Col} controlId="floatingBranch" label="Branch">
              <Form.Control
                type="text"
                placeholder="Enter your Branch"
                onChange={(e) => setBranch(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel as={Col} controlId="floatingBatch" label="Batch">
              <Form.Control
                type="number"
                placeholder="Enter your Batch"
                onChange={(e) => setBatch(e.target.value)}
              />
            </FloatingLabel>
          </Row>

          <Row className="mb-3">
            <FloatingLabel as={Col} controlId="floatingCgpa" label="CGPA">
              <Form.Control
                type="number"
                placeholder="Enter your CGPA"
                onChange={(e) => setCgpa(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              as={Col}
              controlId="floatingTextarea"
              label="Skills"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Enter your Skills"
                onChange={(e) => setSkills(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel as={Col} controlId="floatingFile">
              <Form.Control
                type="file"
                placeholder="Upload your resume here!"
                onChange={(e) => setFile(e.target.value)}
              />
            </FloatingLabel>
          </Row>
          <div className="mt-3 mb-3 text-center">
            Already have account ? <Link to="/login">Login</Link>
          </div>

          <div className="d-grid gap-2">
            <Button variant="primary" onClick={handleSubmit}>
              Sign Up
            </Button>
          </div>
        </Form>
        <hr />
      </div>
    </div>
  );
};
