import Navbar from "../../component2/Navbar";
import Banner from "../../component2/Banner";
import MentalDisorders from "../../component2/MentalDisorders";
import Footer from "../../component2/Footer";
import "./style.css";

const DirektoriPenyakit = () => {
  return (
    <div className="direktori-penyakit">
      <section className="top">
        <div className="hero">
          <div className="hero-child" />
          <img
            className="decoration-icon"
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
          <div className="hero-item" />
          <Navbar />
          <Banner />
        </div>
      </section>
      <MentalDisorders />
      <Footer />
    </div>
  );
};

export default DirektoriPenyakit;
