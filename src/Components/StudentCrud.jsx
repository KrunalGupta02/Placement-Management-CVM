import React, { useState, useEffect } from "react";
import { Table, Button, Col, Form, Row, FloatingLabel } from "react-bootstrap";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import NavbarStudent from "./NavbarStudent";

export const StudentCrud = () => {
  const [state, setState] = useState("");
  async function data() {
    const docRef = doc(db, "students", "recent");
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()["email"];
    console.log(data);

    const docRef1 = doc(db, "approvedUser", data);
    const docSnap1 = await getDoc(docRef1);

    if (docSnap1.exists()) {
      setState(docSnap1.data());
      console.log("Document data:", docSnap1.data());
      console.log("hi", docSnap1.id);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  console.log("State : ", state);
  // updateUser = (id, updateUser) => {
  //   // Book is present in collection or not
  //   const studentdoc = doc(db, "student", id);

  //   // Update the book
  //   return updateDoc(studentdoc, updateUser);
  // };

  return (
    <div>
      <NavbarStudent />
      <div className="p-4 box">
        <h2 className="mb-3">Edit Profile</h2>

        <Form>
          <Row className="mb-3">
            <FloatingLabel as={Col} controlId="floatingEmail" label="Email">
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <Button variant="danger">Edit</Button> */}
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
              {/* <Button variant="danger">Edit</Button> */}
            </FloatingLabel>

            <FloatingLabel as={Col} controlId="floatingName" label="Name">
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                onChange={(e) => setName(e.target.value)}
              />
              {/* <Button variant="danger">Edit</Button> */}
            </FloatingLabel>
          </Row>

          <Row className="mb-3">
            <FloatingLabel as={Col} controlId="formFileDisabled" label="Branch">
              <Form.Control
                type="text"
                disabled
                placeholder="Enter your Branch"
                onChange={(e) => setBranch(e.target.value)}
              />
              {/* <Button variant="danger">Edit</Button> */}
            </FloatingLabel>

            <FloatingLabel as={Col} controlId="formFileDisabled" label="Batch">
              <Form.Control
                type="number"
                disabled
                placeholder="Enter your Batch"
                onChange={(e) => setBatch(e.target.value)}
              />
              {/* <Button variant="danger">Edit</Button> */}
            </FloatingLabel>

            <FloatingLabel as={Col} controlId="formFileDisabled" label="CGPA">
              <Form.Control
                type="number"
                disabled
                placeholder="Enter your CGPA"
                onChange={(e) => setCgpa(e.target.value)}
              />
              {/* <Button variant="danger">Edit</Button> */}
            </FloatingLabel>
          </Row>

          <Row className="mb-3">
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
              {/* <Button variant="danger">Edit</Button> */}
            </FloatingLabel>

            <FloatingLabel as={Col} controlId="floatingFile">
              <Form.Control
                type="file"
                placeholder="Upload your resume here!"
                onChange={(e) => setFile(e.target.value)}
              />
              {/* <Button variant="danger">Edit</Button> */}
            </FloatingLabel>
          </Row>
          <Button className="mx-3" variant="dark">
            Edit
          </Button>
          <Button variant="primary">Submit</Button>
        </Form>
        <hr />
      </div>
      <Button className="m-2" onClick={data}>
        Refresh
      </Button>
    </div>
  );
};
