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
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
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
      </ThemeProvider>
  );
}

export default App;
