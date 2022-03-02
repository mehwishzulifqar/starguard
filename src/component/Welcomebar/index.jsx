import React from "react";
import { Button } from 'antd';
import { Link } from "react-router-dom";
const Welcomebar = () => {
  return(
    <>
    <div className="welcome_div">
      <h1>Welcome! </h1>
      <p>Already have an account</p>
      <Link to={'/Login'}>
        <Button className="btn_Signin">Sign up</Button>
      </Link>
    </div>
    </>
  )
}
export default Welcomebar;