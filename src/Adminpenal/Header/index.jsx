import { Row, Image,Button ,Popover} from "antd";
import './style.css';
const content = (
    <div className="popove_div">
      <Row style={{justifyContent:"space-between"}}>
        <p className="Notifications">Notifications</p>
        <a href="#" className="see_text">
          See All
        </a>
      </Row>
      <div className="Murphy_div">
        <Image src="./images/Initials1.png" className="Initials" />
        <div className="Murphy_text">
          <Row>
            <span className="lex_text">Lex Murphy</span>
            <span className="join_text"> requested to join</span>
            <span className="lex_text"> Abstergo Ltd.</span>
          </Row>
          <Row>
            <Button className="Accept_Btn"> Accept</Button>
            <Button className="Reject_btn">Reject</Button>
          </Row>
          <p className="Todaypopove_text">Today at 9:42 AM</p>
        </div>
      </div>
      <div className="Murphy_div">
          <Image src="./images/Initials1.png" className="Initials" />
          <div className="Murphy_text">
            <Row>
              <span className="lex_text"> Teena Backham </span>
              <span className="join_text"> successfully added to</span>
              <span className="lex_text"> Dunder Miflin.</span>
            </Row>
            <p className="Todaypopove_text">Today at 8:31 AM</p>
          </div>
      </div>
      <div className="Murphy_div">
        <Image src="./images/Initials1.png" className="Initials" />
        <div className="Murphy_text">
          <Row>
            <span className="lex_text">Lex Murphy</span>
            <span className="join_text"> requested to join</span>
            <span className="lex_text"> Abstergo Ltd.</span>
          </Row>
          <Row>
            <Button className="Accept_Btn"> Accept</Button>
            <Button className="Reject_btn">Reject</Button>
          </Row>
          <p className="Todaypopove_text">Today at 9:42 AM</p>
        </div>
      </div>
      <div className="Murphy_div">
        <Image src="./images/Initials1.png" className="Initials" />
        <div className="Murphy_text">
          <Row>
            <span className="lex_text"> Staphine </span>
            <span className="join_text"> removed from </span>
            <span className="lex_text"> Dunder Miflin.</span>
          </Row>
          <p className="Todaypopove_text">Yesterday at 10:22 PM</p>
        </div>
      </div>
    </div>
  );
const Header = () => {
  return(
    <>
      <Row style={{justifyContent:'space-between'}}>
        <h1 className="Admin_heading">Admin Panel</h1>
        <Row style={{justifyItems:"center", alignItems: "center"}}>
          <Popover content={content}>
            <Image src="./images/Notification_2.svg" />   
          </Popover>
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
export default Header;