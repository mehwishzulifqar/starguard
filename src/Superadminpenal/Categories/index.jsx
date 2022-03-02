import { Row } from "antd";
import React from "react";
import './style.css';
import tick from '../../assets/images/tick.png';
import tick1 from '../../assets/images/Group.png';
import tick2 from '../../assets/images/pending.png';
import tick3 from '../../assets/images/dell.png';
import { Link } from "react-router-dom";
const Categories = () => {
  return(
    <>
    
      <div className="At_categories">
        <div className="Categories_div">
          <h2>Categories</h2>
        </div>
        <div className="categories_body">
          <Link to={'/'}>
            <div className="All_div">
              <img src={tick } />
              <p style={{color:"#0FA0F1"}}>All</p>
            </div>
          </Link>
           <Link to={'/'}>
            <div className="All_div">
              <img src={tick1 } />
              <p>Approved</p>
            </div>
          </Link>
           <Link to={'/'}>
            <div className="All_div">
              <img src={tick2 } />
              <p>Pending</p>
            </div>
          </Link> <Link to={'/'}>
            <div className="All_div">
              <img src={tick3 } />
              <p>Blocked</p>
            </div>
          </Link>
        </div>

      </div>
    </>
  )
}
export default Categories;