import { Button, Row, Menu, Dropdown, } from "antd";
import {
  CaretDownOutlined
} from "@ant-design/icons";
import './style.css';
const Recentbtn = () => {
  const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
       Recent
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
      Old to New
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        New to Old 
      </a>
    </Menu.Item>
  </Menu>
);
  return(
    <>
  
      <Row style={{justifyContent:"space-between", justifyItems:"center",alignItems:"center"}}>
        <h1> Organization List</h1>
        <Dropdown overlay={menu}>
          <Button className="Recent_btn">Recent <CaretDownOutlined /></Button>
        </Dropdown>  
      </Row>

    </>
  )
}
export default Recentbtn;