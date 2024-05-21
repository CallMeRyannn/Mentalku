import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <header className="img-20240506-233046-2-parent">
      <img
        className="img-20240506-233046-2-icon"
        loading="lazy"
        alt=""
        src="/img-20240506-233046-2@2x.png"
      />
      <div className="frame-wrapper">
        <div className="beranda-parent">
          <b className="beranda">Beranda</b>
          <div className="navigation">
            <div className="directory-info">
              <b className="direktori">Direktori</b>
              <div className="directory-info-icons-wrapper">
                <img
                  className="directory-info-icons"
                  alt=""
                  src="/directory-info-icons.svg"
                />
              </div>
            </div>
            <div className="consultation">
              <b className="konsultasi-online">Konsultasi Online</b>
            </div>
            <div className="directory-info1">
              <b className="informasi">Informasi</b>
              <div className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button1">
          <b className="see-detail1">Direktori</b>
        </button>
      </div>
    </header>
  );
};

export default FrameComponent3;
