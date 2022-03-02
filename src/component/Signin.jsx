import React from "react";
import 'antd/dist/antd.css'; 
import {  Row, Col, Form, Input, Button } from "antd";
import  Sideimage from "./Sideimage";
import Welcomebar from './Welcomebar';
import Headerlogo from './Headerlogo';
import { Link } from "react-router-dom";

const Signin = () => {
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
          <h1>Sign in</h1>
          <p>Sign in to your account by given credential</p>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="form_div"
               
            >
            <Form.Item
              name="Enter username or email"
              rules={[
                {
                required: true,
                message: "Please input your username!",
                    },
                  ]}
                >
                <Input
                  placeholder="Enter username or email"
                  className="email_id"
                />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[
                {
                  required: true,
                    message: "Please input your Confirm Password!",
                  },
                ]}
              >
            <Input.Password
              placeholder="Password"
                className="email_id"
            />
            </Form.Item>
            <Row style={{justifyContent:"end", textAlign:'end'}}>
              <Link to={'/Forgot'} className="Forgot_text">
                Forgot password?
              </Link>
            </Row>
            <Form.Item>
                <Link to={'/Login'}>
                  <Button className="SUBMIT_btn" htmlType="submit">
                     Sign in
                  </Button>
                </Link>
            </Form.Item>
          </Form>
        </div>
     </div>
    </>
  )
}
export default Signin;