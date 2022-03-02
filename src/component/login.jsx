import React from "react";
import 'antd/dist/antd.css'; 
import {  Row, Col, Form, Input, Button } from "antd";
import  Sideimage from "./Sideimage";
import Headerlogo from "./Headerlogo";
import { Link } from "react-router-dom";



const Login = () => {
    const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return <>
    <div className="At_Strargurd">

      <div className="Signin_div">
        <Sideimage />
      <div className="welcome_div">
      <h1>Welcome! </h1>
      <p>Already have an account</p>
      <Link to={'/'}>
        <Button className="btn_Signin">Sign in</Button>
      </Link>
    </div>
      </div>

      <div className="signin_div1">
        <Headerlogo />
        <h1>Sign up</h1>
        <p>Welcome to starguard. Sign up to get started</p>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form_div"
               
          >
            <Row>
              <Col md={{span: 12}}>
                <Form.Item
              name="First name"
              rules={[
                {
                required: true,
                message: "Please input your First name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="First name"
                    className="email_id"
                    id="email_input"
                  />
                </Form.Item>
              </Col>
               <Col md={{span: 12}}>
                <Form.Item
              name="Last name"
              rules={[
                {
                required: true,
                message: "Please input your First name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Last name"
                    className="email_id"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="Email ID"
              rules={[
                {
                required: true,
                message: "Please input your Email ID!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Email ID"
                    className="email_id"
                  />
                </Form.Item>
            <Form.Item
              name="Phone No."
              rules={[
                {
                required: true,
                message: "Please input your Phone No.!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Phone No."
                    className="email_id"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    className="email_id"
                  />
            </Form.Item>
          <Form.Item
            name="Confirm Password"
              rules={[
                {
                  required: true,
                    message: "Please input your Confirm Password!",
                  },
                ]}
              >
            <Input.Password
              placeholder="Confirm Password"
                className="email_id"
            />
          </Form.Item>
          <Form.Item>
            <Link to={'/Signin'}>
              <Button className="SUBMIT_btn" htmlType="submit">
                Sign up
              </Button>
            </Link>
          </Form.Item>               
        </Form>           
      </div>
    </div>
  </>
}

export default Login;