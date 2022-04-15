import "./UserLayout.scss";


const UserLayoutRoute = ({ children }) => {
  return <div>{children}</div>;
};
const UserLayout = ({ component: Component, ...props }) => {
  return (
    <UserLayoutRoute>
      <Component {...props} />
    </UserLayoutRoute>
  );
};

export default UserLayout;
