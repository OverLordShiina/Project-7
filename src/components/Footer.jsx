import logo from "../assets/LogoFooter.svg";
import "../style/Footer.css";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Kasa Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
