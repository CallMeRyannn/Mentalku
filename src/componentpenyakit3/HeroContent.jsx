import "./HeroContent.css";

const HeroContent = () => {
  return (
    <header className="hero-content">
      <img
        className="img-20240506-233046-2-icon"
        loading="lazy"
        alt=""
        src="/img-20240506-233046-2@2x.png"
      />
      <div className="hero-details">
        <div className="hero-title">
          <b className="beranda">Beranda</b>
          <div className="hero-navigation">
            <div className="navigation-items">
              <b className="direktori">Direktori</b>
              <div className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </div>
            </div>
            <div className="konsultasi-online-wrapper">
              <b className="konsultasi-online">Konsultasi Online</b>
            </div>
            <div className="navigation-items1">
              <b className="informasi">Informasi</b>
              <div className="vector-container">
                <img className="vector-icon1" alt="" src="/vector-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-button">
        <button className="button1">
          <b className="see-detail1">Direktori</b>
        </button>
      </div>
    </header>
  );
};

export default HeroContent;
