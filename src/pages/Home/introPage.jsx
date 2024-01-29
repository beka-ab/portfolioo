import bkImg from "../../assets/images/background.png";
import Button from "../../components/Button/Button";
import PhotoBox from "../../components/Photobox/Photobox";
import { Link } from "react-router-dom";
const IntroPage = () => {
  return (
    <section className="intro-page">
      <img
        src={bkImg}
        alt="background"
        className="intro-page__background-image"
      />
      <div className="intro-page__shadow"></div>
      <div className="intro-page__content">
        <PhotoBox
          name="Beka Abuladze"
          avatar="..assets/images"
          title="Programmer. Creative. Innovator"
          description="Give me the problem to solve it"
        />
        <Link to="/inner" className="intro-page__button">
          <Button text="Know more"></Button>
        </Link>
      </div>
    </section>
  );
};

export default IntroPage;
