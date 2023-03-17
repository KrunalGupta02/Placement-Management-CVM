import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";
import NavbarStudent from "./NavbarStudent.jsx";

export default function CompanyDetails() {
  const [company, setCompany] = useState([]);
  const companyRef = collection(db, "recruiter");

  const getComapny = async () => {
    const data = await getAllCompany();
    console.log(data);
    // console.log(data.docs);

    // Fetching the data from firestore
    setCompany(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const getAllCompany = () => {
    return getDocs(companyRef);
  };

  return (
    <div>
      <NavbarStudent />
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
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
