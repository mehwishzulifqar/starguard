import { Row } from "antd";
import './style.css';
const Supertableheader = () => {
  return(
    <>
      <Row>
        <div className="tableheader">
          <ul>
            <li>ID</li>
            <li>Name</li>
            <li>Created</li>
            <li>No. of Users</li>
            <li>Status</li>
          </ul>
        </div>
      </Row>
    </>
  )
}
export default Supertableheader;