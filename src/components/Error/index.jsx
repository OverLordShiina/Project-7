import Logo from "../Error";
export default function ErrorPage() {
  return (
    <div id="error-page">
      <img src={Logo} className="Error-logo" alt="404 Error Code" />
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
    </div>
  );
}
