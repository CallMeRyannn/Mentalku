import "./FrameComponent.css";
import { Link } from 'react-router-dom';

const FrameComponent = () => {
  return (
    <header className="img-20240506-233046-2-parent">
      <img
        className="img-20240506-233046-2-icon"
        loading="lazy"
        alt=""
        src="/img/logo3.png"
      />
      <div className="hero-info">
        <div className="hero-nav">
          <Link to="/">
          <b className="beranda1">Beranda</b>
          </Link>
          <div className="nav-links">
            <div className="directory-info">
              <Link to="#">
              <b className="direktori1">Direktori</b>
              </Link>
              <div className="vector-wrapper">
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
            </div>
            <div className="consultation">
              <Link to="#">
              <b className="konsultasi-online1">Konsultasi Online</b>
              </Link>
            </div>
            <div className="directory-info1">
              <Link to="/jadwal">
              <b className="informasi1">Informasi</b>
              </Link>
              <div className="vector-container">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button1">
          <b className="see-detail1">Informasi</b>
        </button>
      </div>
    </header>
  );
};

export default FrameComponent;
