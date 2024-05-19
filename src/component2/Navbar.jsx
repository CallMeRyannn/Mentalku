import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="left-nav">
        <img
          className="img-20240506-233046-2-icon"
          loading="lazy"
          alt=""
          src="/img-20240506-233046-2@2x.png"
        />
      </div>
      <div className="right-nav">
        <div className="links">
          <b className="beranda">Beranda</b>
          <div className="internal-links">
            <div className="pair-links">
              <b className="direktori">Direktori</b>
              <div className="decoration-pair">
                <img
                  className="decorations-icon"
                  alt=""
                  src="/decorations.svg"
                />
              </div>
            </div>
            <div className="consultation">
              <b className="konsultasi-online">Konsultasi Online</b>
            </div>
            <div className="pair-links1">
              <b className="informasi">Informasi</b>
              <div className="vector-wrapper">
                <img className="vector-icon" alt="" src="/decorations.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button1">
          <b className="see-detail1">{`Direktori `}</b>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
