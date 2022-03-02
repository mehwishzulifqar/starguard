import { Image,Col, Row } from "antd";
import './style.css'


const Totaluser = () => {
  return(
    <>
    <Row>
     <Col md={{span: 6}}>
       <div className="totaluser_images" style={{ marginRight:'20px'}}>
         <h1>67</h1>
         <p>Total Users</p>
       </div>
     </Col>
     <Col md={{span: 6}}>
        <div className="totaluser_images totaluser_images1" style={{ marginRight:'20px'}}>
         <h1>67</h1>
         <p>Total Users</p>
       </div>
     </Col>
      <Col md={{span: 6}}>
       <div className="totaluser_images totaluser_images2" style={{marginRight:'20px'}}>
         <h1>67</h1>
         <p>Total Users</p>
       </div>
     </Col>
      <Col md={{span: 6}}>
       <div className="totaluser_images totaluser_images3">
         <h1>67</h1>
         <p>Total Users</p>
       </div>
     </Col>
    </Row>
    </>
  )
}
export default Totaluser;