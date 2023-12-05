import BannerBg from "../assets/IMG.svg";
import "../style/Banner.css";

function Banner() {
  return (
    <div className="acl-banner">
      <img src={BannerBg} alt="banner background" />
      <span className="banner-text">Chez vous, partout et ailleurs</span>
    </div>
  );
}

export default Banner;
