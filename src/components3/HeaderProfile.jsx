import "./HeaderProfile.css";

const HeaderProfile = () => {
  return (
    <header className="hero-content">
      <img
        className="img-20240506-233046-2-icon"
        loading="lazy"
        alt=""
        src="/img-20240506-233046-2@2x.png"
      />
      <div className="hero-content-inner">
        <div className="navigation-buttons-parent">
          <div className="navigation-buttons">
            <b className="beranda">Beranda</b>
          </div>
          <div className="navigation-buttons1">
            <b className="direktori">Direktori</b>
            <div className="navigation-icons">
              <img className="vector-icon" alt="" src="/vector.svg" />
            </div>
          </div>
          <div className="navigation-buttons2">
            <b className="konsultasi-online">Konsultasi Online</b>
          </div>
          <div className="navigation-buttons3">
            <b className="informasi">Informasi</b>
            <div className="vector-wrapper">
              <img className="vector-icon1" alt="" src="/vector.svg" />
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

export default HeaderProfile;
