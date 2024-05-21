import FrameComponent from "../../components2/FrameComponent";
import DoctorCard from "../../components2/DoctorCard";
import Contact from "../../components2/Contact";
import "./style.css";

const JadwalDokter = () => {
  return (
    <div className="jadwal-dokter">
      <section className="hero">
        <div className="hero-child" />
        <img className="hero-item" loading="lazy" alt="" src="/img/Vector 2.png" />
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
        <FrameComponent />
        <div className="doctor-schedule">
          <div className="doctor-schedule-inner">
            <div className="doctor-schedule-background" />
            <div className="jadwal-dokter-wrapper">
              <h1 className="jadwal-dokter1">Jadwal Dokter</h1>
            </div>
          </div>
        </div>
      </section>
      <DoctorCard />
      <Contact />
    </div>
  );
};

export default JadwalDokter;
