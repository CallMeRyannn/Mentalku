import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <header className="img-20240506-233046-2-parent">
      <img
        className="img-20240506-233046-2-icon"
        loading="lazy"
        alt=""
        src="/img-20240506-233046-2@2x.png"
      />
      <div className="hero-title-container-wrapper">
        <div className="hero-title-container">
          <b className="beranda">Beranda</b>
          <div className="navigation">
            <div className="navigation-items">
              <b className="direktori">Direktori</b>
              <div className="navigation-icons">
                <img
                  className="navigation-icon-instances"
                  alt=""
                  src="/navigation-icon-instances.svg"
                />
              </div>
            </div>
            <div className="consultation">
              <b className="konsultasi-online">Konsultasi Online</b>
            </div>
            <div className="navigation-items1">
              <b className="informasi">Informasi</b>
              <div className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector-1.svg" />
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

export default FrameComponent1;
