import React, { useState } from "react";
import { db } from "../../firebase";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import CollapsibleExample from "./Navbar";

export default function Records() {
  const [wipro, setWipro] = useState([]);
  const [google, setGoogle] = useState([]);
  const companyRef = collection(db, "wipro");
  const companyRefGoogle = collection(db, "google");
  const getComapny = async () => {
    const data = await getAllCompany();
    // console.log(data);
    // console.log(data.docs);

    // Fetching the data from firestore
    setWipro(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const getAllCompany = () => {
    return getDocs(companyRef);
  };

  const getGoogle = async () => {
    const data = await getAllGoogle();
    // console.log(data);
    // console.log(data.docs);

    // Fetching the data from firestore
    setGoogle(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const getAllGoogle = () => {
    return getDocs(companyRefGoogle);
  };

  return (
    <div>
      <CollapsibleExample />
      <Button className="m-3" onClick={getComapny}>
        Wipro
      </Button>
      <Button className="m-3" onClick={getGoogle}>
        Google
      </Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Aprrove</th> */}
          </tr>
        </thead>

        {/* Displaying the fetching data in the table  */}
        <tbody>
          {wipro.map((doc, index) => {
            return (
              <tr key={doc.id}>
                {/* Array index starts from 0 */}
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.email}</td>
                {/* <td>
                  <Button variant="danger" onClick={() => handleApprove(doc)}>
                    Approve
                  </Button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Table striped bordered hover size="sm">
        {/* <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Aprrove</th>
             </tr>
        </thead>  */}

        {/* Displaying the fetching data in the table  */}
        <tbody>
          {google.map((doc, index) => {
            return (
              <tr key={doc.id}>
                {/* Array index starts from 0 */}
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.email}</td>
                {/* <td>
                  <Button variant="danger" onClick={() => handleApprove(doc)}>
                    Approve
                  </Button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
