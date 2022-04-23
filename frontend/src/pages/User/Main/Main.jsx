import "./Main.scss";
import background from "../../../assets/images/background.jpg";

const Main = () => {
  return (
    <div className="Main">
      <img src={background} alt="background" className="Main__section-background"/>
    </div>
  );
};

export default Main;
