import logo from "../../assets/design.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/ATErcan" className="link">
        -Credits-
      </a>
      <img src={logo} alt="design" className="logo" />
      <p className="me">Me - A full-stack developer of the near future...</p>
    </footer>
  );
};

export default Footer;
