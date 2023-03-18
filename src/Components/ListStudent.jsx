import ListGroup from "react-bootstrap/ListGroup";
import { FaTachometerAlt } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";
import { BsFillBuildingFill } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";

import { Link, useNavigate } from "react-router-dom";

export default function ListStudent() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <FaTachometerAlt />
        <Link to="/studentcrud">Profile</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <GrValidate />
        <Link to="/companydetails">Apply to Company</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <BsFillBuildingFill />
        <Link to="">Resources</Link>
      </ListGroup.Item>
      {/* <ListGroup.Item>
        <GrHostMaintenance />
        <Link to="/companydetails">Record of placement</Link>
      </ListGroup.Item> */}
    </ListGroup>
  );
}
