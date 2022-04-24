import "./UserLayout.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Grid from "@mui/material/Grid";

const UserLayoutRoute = ({ children }) => {
  return (
    <Grid container>
      <Header />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "10vh" }}
      >
        <Grid item xs={3} style={{ width: "100%"}}>
          {children}
        </Grid>
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
