import "./FrameComponent5.css";

const FrameComponent5 = () => {
  return (
    <header className="img-20240506-233046-2-parent">
      <img
        className="img-20240506-233046-2-icon"
        loading="lazy"
        alt=""
        src="/img-20240506-233046-2@2x.png"
      />
      <div className="navigation-menu-wrapper">
        <div className="navigation-menu">
          <b className="beranda">Beranda</b>
          <div className="navigation-options">
            <div className="direktori-parent">
              <b className="direktori">Direktori</b>
              <div className="option-pair">
                <img className="icons" alt="" src="/icons.svg" />
              </div>
            </div>
            <div className="konsultasi-online-wrapper">
              <b className="konsultasi-online1">Konsultasi Online</b>
            </div>
            <div className="informasi-parent">
              <b className="informasi">Informasi</b>
              <div className="vector-wrapper">
                <img className="vector-icon" alt="" src="/icons.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button1">
          <b className="see-detail1">Konsultasi Online</b>
        </button>
      </div>
    </header>
  );
};

export default FrameComponent5;
