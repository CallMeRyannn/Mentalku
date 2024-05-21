import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-child" />
      <img
        className="image-9-icon"
        loading="lazy"
        alt=""
        src="/img/logo.png"
      />
      <div className="navigation-container">
        <div className="navigation-links">
          <div className="home-link">
            <Link to="/">
            <div className="beranda">Beranda</div>
            </Link>
          </div>
          <div className="directories">
            <Link to="#">
            <div className="direktori">Direktori</div>
            </Link>
            <div className="healthiconsv-wrapper">
              <img className="healthiconsv" alt="" src="/healthiconsv.svg" />
            </div>
          </div>
          <div className="konsultasi-online-parent">
            <Link to="#">
            <div className="konsultasi-online">Konsultasi Online</div>
            </Link>
            <div className="information-block">
              <Link to="/jadwal">
              <div className="informasi">Informasi</div>
              </Link>
              <div className="healthiconsv-container">
                <img className="healthiconsv1" alt="" src="/healthiconsv.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-button-wrapper">
        <button className="login-button">
          <div className="login-button-child" />
          <Link to="/login">
          <b className="masuk2">Masuk</b>
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
