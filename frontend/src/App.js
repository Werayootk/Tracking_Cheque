import "./App.css";
import React from "react";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import Admin from "./pages/Admin/Admin/Admin";
import Cheque from "./pages/Admin/Cheque/Cheque";
import Company from "./pages/Admin/Company/Company";
import Main from "./pages/User/Main/Main";
import Login from "./pages/User/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/main" />} />
      <Route exact path="/main" element={<UserLayout component={Main} />} />
      <Route exact path="/login" element={<UserLayout component={Login} />} />
      <Route
        exact
        path="/logout"
        element={() => {
          return <Navigate to="/" />;
        }}
      />
      <Route exact path="/admin" element={<AdminLayout component={Admin} />} />
      <Route exact path="/company" element={<AdminLayout component={Company} />} />
      <Route exact path="/cheque" element={<AdminLayout component={Cheque} />} />
    </Routes>
  );
}

export default App;
