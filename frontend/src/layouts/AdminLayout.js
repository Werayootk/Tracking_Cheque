import "./AdminLayout.scss";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const AdminLayoutRoute = ({ children }) => {
  return <>{children}</>;
};
const AdminLayout = ({ component: Component, ...props }) => {
  return (
    <AdminLayoutRoute>
      <Component {...props} />
    </AdminLayoutRoute>
  );
};

export default AdminLayout;
