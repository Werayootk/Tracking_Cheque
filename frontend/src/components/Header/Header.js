import "./Header.scss";
import Grid from "@mui/material/Grid";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <>
      <Grid item xs={12} md={8} sm={6}>
        <div className="Header__head">
          <div className="Header__logo"></div>
        </div>
      </Grid>
      <Grid item xs={12} md={4} sm={6}>
        <div className="Header__head">
          <div className="Header__call">
            <CallIcon /> 02-123-4567
          </div>
          <div className="Header__login">
            <PersonIcon /> เข้าสู่ระบบ
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Header;
