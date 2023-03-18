import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import NavbarStudent from "./NavbarStudent.jsx";

export default function CompanyDetails() {
  const [company, setCompany] = useState([]);
  const companyRef = collection(db, "recruiter");
  const [state, setState] = useState("");

  const getComapny = async () => {
    const data = await getAllCompany();
    console.log("data", data);
    // console.log(data.docs);
    console.log("c", company);

    // Fetching the data from firestore
    setCompany(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        // recruiterName: doc.recruiterName,
      }))
    );
    console.log(company);
  };

  const getAllCompany = () => {
    return getDocs(companyRef);
  };

  const handleApply = () => {
    async function data() {
      const docRef = doc(db, "students", "recent");
      const docSnap = await getDoc(docRef);
      const data = docSnap.data()["email"];
      console.log("data:", data);

      const docRef1 = doc(db, "approvedUser", data);
      const docSnap1 = await getDoc(docRef1);

      if (docSnap1.exists()) {
        setState(docSnap1.data());
        console.log("Document data:", docSnap1.data());
        console.log("hi", docSnap1.id);
        let data = docSnap1.data();
        console.log("State : ", data.name);

        await setDoc(doc(db, "meta", data.email), {
          name: data.name,
          email: data.email,
          batch: data.batch,
          skills: data.skills,
          branch: data.branch,
          cgpa: data.cgpa,
          file: data.file,
        });
        await setDoc(doc(db, "google", data.email), {
          name: data.name,
          email: data.email,
          batch: data.batch,
          skills: data.skills,
          branch: data.branch,
          cgpa: data.cgpa,
          file: data.file,
        });
        await setDoc(doc(db, "google", data.email), {
          name: data.name,
          email: data.email,
          batch: data.batch,
          skills: data.skills,
          branch: data.branch,
          cgpa: data.cgpa,
          file: data.file,
        });
        // const companyName = ; // retrieve the company name from the current company object
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    data();
    // student data
  };

  return (
    <div>
      <NavbarStudent />
      {/* <Button onClick={data}></Button> */}
      <Button className="m-3" onClick={getComapny}>
        Refresh
      </Button>
      {company.map((doc, index) => {
        console.log(doc);
        return (
          <Card className="mb-3" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Company:{doc.recruiterName}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Eligibility:{doc.eligibility}</ListGroup.Item>
              <ListGroup.Item>
                Job Description :{doc.jobDescription}
              </ListGroup.Item>
              <ListGroup.Item>Deadline:{doc.deadline}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="primary" onClick={handleApply}>
                Apply
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
