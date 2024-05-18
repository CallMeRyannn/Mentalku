import FrameComponent5 from "../../component/FrameComponent5";
import FrameComponent4 from "../../component/FrameComponent4";
import FrameComponent2 from "../../component/FrameComponent2";
import FrameComponent1 from "../../component/FrameComponent1";
import FrameComponent from "../../component/FrameComponent";
import "./Style.css";

const KonsultasiOnline = () => {
  return (
    <div className="konsultasi-online">
      <section className="hero">
        <div className="hero-child" />
        <img className="hero-image-icon" alt="" src="/hero-image.svg" />
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
        <div className="hero-item" />
        <FrameComponent5 />
        <FrameComponent4 />
      </section>
      <section className="form-container-wrapper">
        <div className="form-container">
          <FrameComponent2 />
          <FrameComponent1 />
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default KonsultasiOnline;
