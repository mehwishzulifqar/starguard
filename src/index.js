import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import Signin from "./component/Signin";
import Forgot from "./component/Forgot";
import Newpassword from "./component/Newpassword";
import EmailBox from "./component/EmailBox";
import Adminpenal from "./Adminpenal";
import Superadminpenal from "./Superadminpenal";
import ErrorPage from "./ErrorPage";

ReactDOM.render(



  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<ErrorPage />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Signin" element={<Signin />} />
        <Route exact path="/Forgot" element={<Forgot />} />
        <Route exact path="/Newpassword" element={<Newpassword />} />
        <Route exact path="/EmailBox" element={<EmailBox />} />
        <Route exact path="/Adminpenal" element={<Adminpenal />} />
        <Route exact path="/Superadminpenal" element={<Superadminpenal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
