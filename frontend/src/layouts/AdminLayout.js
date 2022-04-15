import "./AdminLayout.scss";
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
