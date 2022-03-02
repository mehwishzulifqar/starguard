import { Menu, Dropdown,} from 'antd';
import './style.css';
import {
  CaretDownOutlined
} from "@ant-design/icons";
const Supertablebody = () => {
  const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
  return(
    <>
    <div  className='At_Table'>
      <div className="tablebody">
          <ul>
            <li>#UN-129340</li>
            <li>Abstergo Ltd.</li>
            <li>8 Sep, 2020</li>
            <li>25-50 users</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <button className='Approved__btn'>Approved<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>
          
      </div>
      <div className="tablebody">
          <ul>
            <li>#UN-129340</li>
            <li>Abstergo Ltd.</li>
            <li>8 Sep, 2020</li>
            <li>25-50 users</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <button className='Approved__btn' style={{background:"#FC645A"}}>Blocked<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>
          
      </div>
      <div className="tablebody">
          <ul>
            <li>#UN-129340</li>
            <li>Abstergo Ltd.</li>
            <li>8 Sep, 2020</li>
            <li>25-50 users</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <button className='Approved__btn'>Approved<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>
          
      </div>
      <div className="tablebody">
          <ul>
            <li>#UN-129340</li>
            <li>Abstergo Ltd.</li>
            <li>8 Sep, 2020</li>
            <li>25-50 users</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <button className='Approved__btn'>Approved<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>   
      </div>
      <div className="tablebody">
          <ul>
            <li>#UN-129340</li>
            <li>Abstergo Ltd.</li>
            <li>8 Sep, 2020</li>
            <li>25-50 users</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
               <button className='Approved__btn'  style={{background:"#57C1FC"}}>Pending<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>
          
      </div>
      <div className="tablebody">
          <ul>
            <li>#UN-129340</li>
            <li>Abstergo Ltd.</li>
            <li>8 Sep, 2020</li>
            <li>25-50 users</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
               <button className='Approved__btn'  style={{background:"#57C1FC"}}>Pending<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>
          
      </div>
     </div>
    </>
  )
}
export default Supertablebody;