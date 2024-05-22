import "./Reasoning.css";

const Reasoning = () => {
  return (
    <section className="reasoning">
      <div className="flexibility-parent">
        <div className="flexibility">
          <div className="flexibility-container">
            <div className="flexibility-header">
              <b className="mengapa"></b>
            </div>
            <h1 className="mengapa-konsultasi-kesehatan">
              Mengapa Konsultasi Kesehatan Mental Kami adalah Pilihan Terbaik
            </h1>
          </div>
        </div>
        <div className="features">
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-item-child" />
              <div className="psychologist-icon">
                <img
                  className="psychologist-icon1"
                  loading="lazy"
                  alt=""
                  src="/img/fleksibel.png"
                />
              </div>
              <div className="feature-item1">
                <div className="feature-item2">
                  <h3 className="fleksibel">Fleksibel</h3>
                </div>
                <div className="pasien-dapat-melakukan">
                  Pasien dapat melakukan konsultasi di manapun dan kapanpun
                  tanpa perlu datang ke klinik atau rumah sakit. Selain itu,
                  layanan ini juga buka 24 jam. Jadi, di tengah kesibukan pun,
                  pasien bisa tetap konsultasi dengan dokter terkait keluhan
                  penyakitnya.
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-group">
            <div className="frame-item" />
            <div className="free-consult-content">
              <img
                className="group-icon"
                loading="lazy"
                alt=""
                src="/img/gratis.png"
              />
            </div>
            <div className="free-consult-description">
              <div className="gratis-wrapper">
                <h2 className="gratis">Gratis</h2>
              </div>
              <div className="pasien-dapat-melakukan1">
                pasien dapat melakukan sesi tanya jawab dengan dokter
                profesional kapanpun dan di manapun secara gratis. Tentu hal ini
                sangat bermanfaat, terutama bagi masyarakat menengah ke bawah.
              </div>
            </div>
          </div>
          <div className="feature-list1">
            <div className="rectangle-container">
              <div className="frame-inner" />
              <div className="pendulum-wrapper">
                <img
                  className="pendulum-icon"
                  loading="lazy"
                  alt=""
                  src="/img/fl.png"
                />
              </div>
              <div className="frame-container">
                <div className="fitur-lengkap-wrapper">
                  <h3 className="fitur-lengkap">Fitur Lengkap</h3>
                </div>
                <div className="tidak-hanya-konsultasi">
                  Tidak hanya konsultasi, disini juga ada edukasi seputar
                  kesehatan mental, dan peresepan obat (bila perlu)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasoning;
