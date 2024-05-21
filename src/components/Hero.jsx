import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero1">
      <div className="hero-content">
        <div className="hero-image-overlay" />
        <div className="hero-image-info">
          <img
            className="pexels-shvets-production-71760-icon"
            loading="lazy"
            alt=""
            src="/img/bghome.png"
          />
          <h1 className="mind-keeper">
            <p className="mind">“Mind</p>
            <p className="keeper"> Keeper”</p>
          </h1>
        </div>
        <div className="background-shape" />
      </div>
      <h3 className="kesehatan-bukan-hanya-container">
        <p className="kesehatan-bukan-hanya">
          Kesehatan bukan hanya tentang apa yang kamu makan. Ini tentang apa
          yang kamu pikirkan dan rasakan juga.
        </p>
        <p className="konsultasi-sekarang-juga">
          Konsultasi sekarang juga secara gratis!
        </p>
      </h3>
      <div className="consultation-action">
        <button className="consultation-button">
          <div className="consultation-button-child" />
          <div className="konsultasi">Konsultasi</div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
