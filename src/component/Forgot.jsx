import React from "react";
import 'antd/dist/antd.css'; 
import {   Form, Input, Button } from "antd";
import  Sideimage from "./Sideimage";
import Welcomebar from './Welcomebar';
import Headerlogo from './Headerlogo';
import { Link } from "react-router-dom";

const Forgot = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return(
    <>
     <div className="At_Strargurd">
        <div className="Signin_div">
          <Sideimage />
          <Welcomebar />
        </div>
        <div className="signin_div1">
          <Headerlogo />
          <h1>Forgot Password?</h1>
          <p>Enter the email address you used when you joined and 
                we’ll send you link to reset your password.</p>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="form_div"
               
            >
            <Form.Item
              name="Enter Email ID"
              rules={[
                {
                required: true,
                message: "Please input your username!",
                    },
                  ]}
                >
                <Input
                  placeholder="Email ID"
                  className="email_id"
                />
            </Form.Item>
            <Form.Item>
                <Link to={'/'}>
                  <Button className="SUBMIT_btn" htmlType="submit">
                    Send Link
                  </Button>
                </Link>
            </Form.Item>
          </Form>
        </div>
     </div>
    </>
  )
}
export default Forgot;