import ListGroup from "react-bootstrap/ListGroup";
import { FaTachometerAlt } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";
import { BsFillBuildingFill } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";

import { Link, useNavigate } from "react-router-dom";

export default function ListItems() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <FaTachometerAlt />
        <Link to="/adminmain">Dashboard</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <GrValidate />
        <Link to="/approval">Student Approval</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <BsFillBuildingFill />
        <Link to="/addrecruiter">Add Recruiter</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <GrHostMaintenance />
        <Link to="/companydetails">Record of placement</Link>
      </ListGroup.Item>
    </ListGroup>
  );
}
