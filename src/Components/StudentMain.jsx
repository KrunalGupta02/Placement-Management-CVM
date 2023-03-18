import React from "react";
import { Login } from "./Login";
import { Signin } from "./Signin";
import NavbarStudent from "./NavbarStudent";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Button } from "react-bootstrap";

const StudentMain = () => {
  async function data() {
    const docRef = doc(db, "students", "recent");
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()["email"];
    console.log(data);

    const docRef1 = doc(db, "approvedUser", data);
    const docSnap1 = await getDoc(docRef1);

    if (docSnap1.exists()) {
      console.log("Document data:", docSnap1.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
    <div>
      <NavbarStudent />

      <Button className="m-2" onClick={data}>
        Refresh
      </Button>
    </div>
  );
};
export default StudentMain;
