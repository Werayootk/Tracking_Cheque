import React, { useState, useEffect, useRef, Fragment } from "react";
import "./AdminLayout.scss";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import routes from "../routes/routes";
import { Route, Router, useNavigate } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";

var ps;

const AdminLayoutRoute = ({ children }) => {
  const mainPanel = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });

  useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [navigate]);

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel" ref={mainPanel}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

const AdminLayout = ({ component: Component, ...props }) => {
  return (
    <AdminLayoutRoute>
      <Component {...props} />
    </AdminLayoutRoute>
  );
};

export default AdminLayout;
