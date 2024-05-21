import "./style.css";
import HeaderProfile from "../../components3/HeaderProfile";
import AboutProfile from "../../components3/AboutProfile";
import FooterProfile from "../../components3/FooterProfile";

const ProfileWebsite = () => {
  return (
    <div className="profil-website">
      <section className="hero">
        <div className="hero-child" />
        <img className="hero-item" loading="lazy" alt="" src="/vector-2.svg" />
        <div className="frame-parent">
          <div className="g8-parent">
            <img className="g8-icon" alt="" src="/g8.svg" />
            <b className="mindfulcare">Mindfulcare</b>
          </div>
          <div className="home-parent">
            <div className="home">Home</div>
            <div className="about">About</div>
            <div className="services">Services</div>
            <div className="page">Page</div>
          </div>
          <div className="button">
            <b className="see-detail">Contact Us</b>
          </div>
        </div>
        <div className="about-us-parent">
          <div className="about-us">About Us</div>
          <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum. `}</div>
        </div>
        <div className="hero-inner" />
        <HeaderProfile />
        <div className="title-content-wrapper">
          <div className="title-content">
            <div className="title-background" />
            <div className="profil-website-wrapper">
              <h1 className="profil-website1">Profil Website</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="about-content-wrapper">
        <AboutProfile />
      </section>
      <FooterProfile />
    </div>
  );
};

export default ProfileWebsite;
