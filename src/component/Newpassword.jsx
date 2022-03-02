import React from "react";
import 'antd/dist/antd.css'; 
import {   Form, Input, Button } from "antd";
import  Sideimage from "./Sideimage";
import Welcomebar from './Welcomebar';
import Headerlogo from './Headerlogo';
import { Link } from "react-router-dom";

const Newpassword = () =>  {
  const onFinish = (values) => {
    console.log('success:', values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
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
          <h1>Create New Password</h1>
          <p>Enter new password here </p>
          <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form_div"
          >
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
                  name="comfirm password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                <Input.Password
                    placeholder="Comfirm Password"
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
export default Newpassword;