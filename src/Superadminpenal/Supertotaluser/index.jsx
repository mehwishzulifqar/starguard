import { Row,Col } from "antd";
import './style.css'

const  Supertotaluser = () => {
  return(
    <>
    <Row>
     <Col md={{span: 8}}>
       <div className="totaluser_images" style={{ marginRight:'20px'}}>
         <h1>45</h1>
         <p>Total Organization</p>
       </div>
     </Col>
     <Col md={{span: 8}}>
        <div className="totaluser_images totaluser_images1" style={{ marginRight:'20px'}}>
         <h1>28</h1>
         <p>Approved Organization</p>
       </div>
     </Col>
      <Col md={{span: 8}}>
       <div className="totaluser_images totaluser_images3">
         <h1>17</h1>
         <p>Blocked Organization</p>
       </div>
     </Col>
    </Row>
    </>
  )
}
export default Supertotaluser;