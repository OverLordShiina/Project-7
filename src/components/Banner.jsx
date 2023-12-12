import "../style/Banner.css";

function Banner({ bannerBg, text = "" }) {
  return (
    <div className="acl-banner">
      <img src={bannerBg} alt="banner background" />
      <span className="banner-text">{text}</span>
    </div>
  );
}

export default Banner;
