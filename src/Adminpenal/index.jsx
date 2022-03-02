import React from "react";
import { Layout,  } from 'antd';
import './style.css'
import Sidenavbar from "./sidenavbar";
import Header from "./Header";
import Totaluser from './Totaluser';
import Recentbtn from './Recentbtn';
import Addnewuser from "./Addnewuser";
import Recentactivity from "./Recentactivity";
import Tableheader from "./Tableheader";
import Tablebody from "./Tablebody";
const Adminpenal = () => {
  const { Content, } = Layout;
  return(
    <>
      <Layout hasSider className="At-Adminpenal">
        <Sidenavbar />         
        <Layout className="site-layout">
          <Header />
          <Content style={{ overflow: 'initial' }}>
           <Totaluser />
           <section className="penal_section">
              <div className="Organization_div">
                <Recentbtn />
                <Tableheader />
                <Tablebody />
              </div>
             <div className="AddNewUser_scetion">
              <Addnewuser />
              <Recentactivity />
            </div>
            </section>
            
          </Content>
        </Layout>
      </Layout>,
    </>
  )
}
export default Adminpenal;