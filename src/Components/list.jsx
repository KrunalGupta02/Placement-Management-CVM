import ListGroup from "react-bootstrap/ListGroup";
import { FaTachometerAlt } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";
import { BsFillBuildingFill } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";

export default function ListItems() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <FaTachometerAlt />
        Dashboard
      </ListGroup.Item>
      <ListGroup.Item>
        <GrValidate />
        Student approval
      </ListGroup.Item>
      <ListGroup.Item>
        <BsFillBuildingFill />
        Add company
      </ListGroup.Item>
      <ListGroup.Item>
        <GrHostMaintenance />
        Maintain record yearwise
      </ListGroup.Item>
    </ListGroup>
  );
}
