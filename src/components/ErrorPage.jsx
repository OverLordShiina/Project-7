import Logo from "../assets/404.svg";
import Banner from "./Banner";
import "../style/ErrorPage.css";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div id="error-page">
      <Banner />
      <img src={Logo} className="Error-logo" alt="Error Code: 404" />
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}
export default ErrorPage;
