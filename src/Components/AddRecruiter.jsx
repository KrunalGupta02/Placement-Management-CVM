import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import CollapsibleExample from "./Navbar";

export default function AddRecruiter() {
  const [recruiterName, setrecruiterName] = useState("");
  const [jobDescription, setjobDescription] = useState("");
  const [eligibility, seteligibility] = useState("");
  const [deadline, setdeadline] = useState("");

  const addRecruiter = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "recruiter"), {
        recruiterName: recruiterName,
        jobDescription: jobDescription,
        eligibility: eligibility,
        deadline: deadline,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <CollapsibleExample />
      <Form onSubmit={addRecruiter}>
        <Form.Group className="mb-3">
          <Form.Label>Recruiter Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recruiter name"
            onChange={(e) => setrecruiterName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="add job details"
            onChange={(e) => setjobDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Eligibility criteria</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter CGPA"
            onChange={(e) => seteligibility(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setdeadline(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
