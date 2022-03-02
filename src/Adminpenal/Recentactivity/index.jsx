import React, { useState } from 'react'
import { Row, } from "antd";
import './style.css';
import recentimg from "../../assets/images/Frame 7226.svg";
import Recentimg2 from "../../assets/images/Frame 7227.svg";
import Recentimg3 from "../../assets/images/pencil.png";

const Recentactivity = () => {
   const [ showRecent, setShowRecet ] = useState(false);
  return(
    <>
    <div className="recent_activity">
            <div className="recentactivity-heading">
                <div className='recent__activity-header_left'>
                    <img src={recentimg} />
                    <span>Recent Activity</span>
                </div>
                <div className='recent__activity-header_right'>
                  <img src={Recentimg2} onClick={() => setShowRecet(!showRecent)}/>
                </div>
            </div>
            <div className="recentactivity-container">
                
                {   !showRecent ? (
                    <div className="socialmedia_div">
                        <img src={Recentimg3} alt='message image' />
                        <p>User Recent Social media posts will show here</p>
                    </div>
                ) : (
                    <div className="tody_div">
                        <div className='recent__activity-content'>
                            <div className='caption'>
                              <span>Today</span>
                            </div>
                            <ul className='activity__list'>
                                <li className='single__activity'>
                                    <div className="status__box"></div>
                                    <div className="activity__msg">
                                        <p>Ut enim ad minim veniam, quis nostrud exercitat ion ullamco laboris nisi ut aliquip... <a href="#" className='link'>Read More</a></p>
                                    </div>
                                </li>
                                <li className='single__activity result__green show__more show__more-green'>
                                    <div className='single__activity-content'>
                                        <div className="status__box"></div>
                                        <div className="activity__msg">
                                            <div className='header__activity'>
                                                <h5>Leslie Annie</h5>
                                                <span>07 Jan 2022</span>
                                            </div>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitat ion ullamco laboris nisi ut aliquip... <a href="#" className='link'>Read More</a></p>
                                        </div>
                                    </div>
                                    <div className='activity__index'>
                                        <span>Hate Speech Index = 25%</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='recent__activity-content'>
                            <div className='caption'>
                                <span>Last Week</span>
                            </div>
                            <ul className='activity__list'>
                                <li className='single__activity result__red'>
                                    <div className="status__box"></div>
                                    <div className="activity__msg">
                                        <p>Ut enim ad minim veniam, quis nostrud exercitat ion ullamco laboris nisi ut aliquip... <a href="#" className='link'>Read More</a></p>
                                    </div>
                                </li>
                                <li className='single__activity result__red show__more show__more-red'>
                                    <div className='single__activity-content'>
                                        <div className="status__box"></div>
                                        <div className="activity__msg">
                                            <div className='header__activity'>
                                                <h5>Leslie Annie</h5>
                                                <span>07 Jan 2022</span>
                                            </div>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitat ion ullamco laboris nisi ut aliquip... <a href="#" className='link'>Read More</a></p>
                                        </div>
                                    </div>
                                    <div className='activity__index'>
                                        <span>Hate Speech Index = 25%</span>
                                    </div>
                                </li>
                                <li className='single__activity result__green'>
                                    <div className="status__box"></div>
                                    <div className="activity__msg">
                                        <p>Ut enim ad minim veniam, quis nostrud exercitat ion ullamco laboris nisi ut aliquip... <a href="#" className='link'>Read More</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
                }
            </div>
        </div>

                         
    </>
  )
}
export default Recentactivity;