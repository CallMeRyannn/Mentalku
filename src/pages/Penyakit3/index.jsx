import HeroContent from "../../componentpenyakit3/HeroContent";
import FrameComponent from "../../componentpenyakit3/FrameComponent";
import FrameComponent1 from "../../componentpenyakit3/FrameComponent1";
import FrameComponent2 from "../../componentpenyakit3/FrameComponent2";
import "./style.css";

const DirektoriPenyakit = () => {
  return (
    <div className="direktori-penyakit-3">
      <section className="hero-wrapper">
        <div className="hero">
          <div className="hero-child" />
          <img
            className="hero-item"
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
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
          <HeroContent />
          <div className="disease-directory">
            <div className="directory-header">
              <div className="directory-rect" />
              <div className="directory-title">
                <h1 className="direktori-penyakit">Direktori Penyakit</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-image">
        <img
          className="image-43-icon"
          loading="lazy"
          alt=""
          src="/image-43@2x.png"
        />
      </section>
      <FrameComponent />
      <FrameComponent1 />
      <FrameComponent2 />
    </div>
  );
};

export default DirektoriPenyakit;
