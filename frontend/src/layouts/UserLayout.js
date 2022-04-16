import "./UserLayout.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const UserLayoutRoute = ({ children }) => {
  return (
    <Grid container>
      <Header />
      <Grid item xs={12}>
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      </Grid>
      <Footer />
    </Grid>
  );
};
const UserLayout = ({ component: Component, ...props }) => {
  return (
    <UserLayoutRoute>
      <Component {...props} />
    </UserLayoutRoute>
  );
};

export default UserLayout;
