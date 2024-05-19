import "./FrameComponent4.css";

const FrameComponent4 = () => {
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
          <div className="frame-group">
            <div className="direktori-parent">
              <b className="direktori">Direktori</b>
              <div className="icon-link">
                <img className="link-icons" alt="" src="/link-icons.svg" />
              </div>
            </div>
            <div className="konsultasi-online-wrapper">
              <b className="konsultasi-online">Konsultasi Online</b>
            </div>
            <div className="informasi-parent">
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

export default FrameComponent4;
