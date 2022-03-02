import './style.css';
import React, { useState } from 'react';
import { Modal, Button,Form,Input } from 'antd';
const Addnewuser = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return(
    <>
      <div className="newuser_div">
        <Button className="AddNewUser_btn" onClick={showModal}>
          Add New User
        </Button>
      </div>
      <Modal className="Newuser_model" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h1>Add New User</h1>
        <p> Enter the email address of user to add him/her <br />
              to your organization</p>
        <Form>
            <Form.Item
              name="Email ID"
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
            <button className="AddUser_btn">Add User</button>
        </Form>
      </Modal>
    </>
  )
}
export default Addnewuser;