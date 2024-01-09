import "../style/Banner.css";

function Banner({ bannerBg, text = "" }) {
  return (
    <div className="acl-banner">
      <img src={bannerBg} alt="banner background" />
      <h1 className="banner-text">{text}</h1>
    </div>
  );
}

export default Banner;
