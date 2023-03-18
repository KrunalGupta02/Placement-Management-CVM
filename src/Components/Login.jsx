import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { db } from "../../firebase";

import { Link, useNavigate } from "react-router-dom";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { auth } from "../../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    await signInWithEmailAndPassword(auth, email, password);

    console.log("LoggedIn");

    console.log(email);
  };

  async function Submit() {
    await signInWithEmailAndPassword(auth, email, password);
    const docRef = doc(db, "students", "recent");
    await updateDoc(docRef, {
      email: email,
    });
    navigate("/studentcrud");
  }

  return (
    <div>
      <div className="p-4 box">
        <h2 className="mb-3">Student Login</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {/* <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signin">Sign in</Link>
          </div> */}

          <div className="d-grid gap-2">
            <Button variant="primary" onClick={Submit}>
              Sign In
            </Button>
          </div>
          <div className="d-grid gap-2">
            <Button variant="success" className="mt-3">
              <Link className="link " to="/phonesignup">
                Login in with Otp
              </Link>
            </Button>
          </div>
        </Form>
        <hr />
      </div>
    </div>
  );
};
