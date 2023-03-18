import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { db } from "../../firebase";

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

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import CollapsibleExample from "./Navbar";

export const Admin = () => {
  const userRef = collection(db, "user");

  const [user, setUser] = useState([]);

  //   console.log("Current user is ", user);

  const getUser = async () => {
    const data = await getAllUsers();
    console.log(data);
    // console.log(data.docs);

    // Fetching the data from firestore
    setUser(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const getAllUsers = () => {
    return getDocs(userRef);
  };

  const handleApprove = async (docs) => {
    // console.log("Id of user is :", id);

    const approvedUser = [...user];
    // console.log(approvedUser);
    // // console.log(approvedUser[0].email);
    const index = approvedUser.indexOf(docs);
    // console.log(index);

    console.log("hi", approvedUser[index].email);

    try {
      await setDoc(doc(db, "approvedUser", approvedUser[index].email), {
        email: approvedUser[index].email,
        password: approvedUser[index].password,
        name: approvedUser[index].name,
        batch: approvedUser[index].batch,
        cgpa: approvedUser[index].cgpa,
        branch: approvedUser[index].branch,
        file: approvedUser[index].file,
        skills: approvedUser[index].skills,
      });

      await createUserWithEmailAndPassword(
        auth,
        approvedUser[index].email,
        approvedUser[index].password
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <CollapsibleExample />
      <div className="mb-2">
        <Button variant="dark edit" onClick={getUser}>
          Refresh List
        </Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Email</th>
            <th>Aprrove</th>
          </tr>
        </thead>

        {/* Displaying the fetching data in the table  */}
        <tbody>
          {user.map((doc, index) => {
            return (
              <tr key={doc.id}>
                {/* Array index starts from 0 */}
                <td>{index + 1}</td>
                <td>{doc.id}</td>
                <td>{doc.email}</td>
                <td>
                  <Button variant="danger" onClick={() => handleApprove(doc)}>
                    Approve
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
