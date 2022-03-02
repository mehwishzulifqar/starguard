import { Menu, Dropdown,} from 'antd';
import './style.css';
import {
  CaretDownOutlined
} from "@ant-design/icons";
import profileimg from '../../assets/images/image2.png';
const Tablebody = () => {
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
            <li>
              <img src={profileimg } className="profileimg" />
              Wade W.
              </li>
            <li>17 Oct, 2021</li>
            <li>16%</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <button className='Active__btn'>Active<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>
          
      </div>
      <div className="tablebody">
          <ul>
            <li>#UN-129340</li>
            <li>
              <img src={profileimg } className="profileimg" />
              Wade W.
              </li>
            <li>17 Oct, 2021</li>
            <li>16%</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <button className='Active__btn'>Active<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>
          
      </div>
      <div className="tablebody">
          <ul>
            <li>#UN-129340</li>
            <li>
              <img src={profileimg } className="profileimg" />
              Wade W.
              </li>
            <li>17 Oct, 2021</li>
            <li>16%</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <button className='Active__btn' style={{background:" #FF7F48"}}>Requested<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>
          
      </div>
      <div className="tablebody">
          <ul>
            <li>#UN-129340</li>
            <li>
              <img src={profileimg } className="profileimg" />
              Wade W.
              </li>
            <li>17 Oct, 2021</li>
            <li>16%</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <button className='Active__btn'>Active<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>   
      </div>
      <div className="tablebody">
          <ul>
            <li>#UN-129340</li>
            <li>
              <img src={profileimg } className="profileimg" />
              Wade W.
              </li>
            <li>17 Oct, 2021</li>
            <li>16%</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
               <button className='Active__btn'  style={{background:"#0FA0F1"}}>Pending<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>
          
      </div>
      <div className="tablebody">
          <ul>
            <li>#UN-129340</li>
            <li>
              <img src={profileimg } className="profileimg" />
              Wade W.
              </li>
            <li>17 Oct, 2021</li>
            <li>16%</li>
            <li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
               <button className='Active__btn'  style={{background:"#0FA0F1"}}>Pending<CaretDownOutlined className='CaretDownOutlined' /></button>
              </Dropdown>
            </li>
          </ul>
          
      </div>
     </div>
    </>
  )
}
export default Tablebody;