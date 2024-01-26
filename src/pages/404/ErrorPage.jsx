import Logo from "../../assets/404.svg";
import Banner from "../../components/Header";
import "../../style/ErrorPage.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

//Page 404
function ErrorPage() {
  return (
    <>
      <div id="error-page">
        <Banner />
        <img src={Logo} className="Error-logo" alt="Error Code: 404" />
        <h2>{"Oups! La page que \nvous demandez n'existe pas."}</h2>
        <Link to="/" className="error-redirect">
          Retourner sur la page d’accueil
        </Link>
      </div>{" "}
      <Footer />
    </>
  );
}
export default ErrorPage;
