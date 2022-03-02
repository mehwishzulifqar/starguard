import { Row } from "antd";
import './style.css';
const Tableheader = () => {
  return(
    <>
      <Row>
        <div className="tableheader">
          <ul>
            <li>ID</li>
            <li>Name</li>
            <li>Created</li>
            <li><span>Avg.</span><br />
                Hate Index</li>
            <li>Status</li>
          </ul>
        </div>

      </Row>
    </>
  )
}
export default Tableheader;