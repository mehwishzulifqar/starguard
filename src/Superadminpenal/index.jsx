import React from "react";
import { Layout,  } from 'antd';
import './style.css'
import Sidenavbar from "../Adminpenal/sidenavbar";
import Supertotaluser from './Supertotaluser';
import Recentbtn from '../Adminpenal/Recentbtn';
import Supertableheader from "./Supertableheader";
import Supertablebody from "./Supertablebody";
import Superheader from './Superheader';
import Categories from "./Categories";
import Badrun from '../../src/assets/images/Badrun 5.png';
const Superadminpenal = () => {
  const { Content, } = Layout;
  return(
    <>
      <Layout hasSider className="At-Adminpenal">
        <Sidenavbar />         
        <Layout className="site-layout1">
         <Superheader />
          <Content style={{ overflow: 'initial' }}>
           <Supertotaluser />
           <section className="penal_section">
             <div className="Superpanel_scetion">
               <Categories />
              <div className="Badrun">
                 <img src={Badrun} />
              </div>
              </div>
              <div className="Organization_div">
                <Recentbtn />
                <Supertableheader />
                <Supertablebody />
              </div>   
            </section> 
          </Content>
        </Layout>
      </Layout>,
    </>
  )
}
export default Superadminpenal;