import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <header className="hero-image">
      <img
        className="img-20240506-233046-2-icon"
        loading="lazy"
        alt=""
        src="/img-20240506-233046-2@2x.png"
      />
      <div className="hero-content">
        <div className="hero-nav">
          <b className="beranda">Beranda</b>
          <div className="nav-links">
            <div className="nav-items">
              <b className="direktori">Direktori</b>
              <div className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </div>
            </div>
            <div className="consultation">
              <b className="konsultasi-online">Konsultasi Online</b>
            </div>
            <div className="nav-items1">
              <b className="informasi">Informasi</b>
              <div className="vector-container">
                <img className="vector-icon1" alt="" src="/vector-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details-button">
        <button className="button1">
          <b className="see-detail1">Direktori</b>
        </button>
      </div>
    </header>
  );
};

export default FrameComponent1;
