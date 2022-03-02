import React from "react";
import Headerlogo from "./Headerlogo";
import { Image, Row , Button} from 'antd';
import { Link } from "react-router-dom";
const EmailBox = () => {
  return(
    <>
      <div className="At_Emaildiv">
        <Headerlogo />
        <div className="At_inboxDiv">
          <Image src="./images/inbox.png" />
          <h1>Check Your Email</h1>
          <p className="verification_text">We have sent you a verification link on email.<br /> 
              Click on link to verify your email.</p>
          <Link to={'/'}>
            <Button className="CheckEmail_btn" htmlType="submit">
              Check Email
            </Button>
          </Link>
          <p className="Resend_link"> Didn’t get a link? <Link to={'/'}>Resend</Link></p>
        </div>

      </div>
    </>
  )
}
export default EmailBox;