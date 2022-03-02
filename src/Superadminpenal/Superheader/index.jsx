import { Row, Image,Button ,Popover} from "antd";
import './style.css';
const Superheader = () => {
  return(
    <>
       <Row style={{justifyContent:'space-between'}}>
        <h1 className="Admin_heading">Overview</h1>
        <Row style={{justifyItems:"center", alignItems: "center"}}>
          {/* <Popover content={content}>
            <Image src="./images/Notification_2.svg" />   
          </Popover> */}
          <div className="male_images">
            <Image src="./images/male.png"  /> 
          </div>
            <div className="Albert_txet">
              <h1>Albert Flores</h1>
              <p>@Albert231</p>
            </div>
        </Row>
     
      </Row>
    </>
  )
}
export default Superheader;