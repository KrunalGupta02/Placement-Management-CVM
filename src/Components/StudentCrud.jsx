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
    </div>
  );
};
