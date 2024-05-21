import "./Partner.css";

const Partner = () => {
  return (
    <section className="partner">
      <div className="partner-info">
        <div className="partner-logo">
          <img
            className="partner-logo-child"
            loading="lazy"
            alt=""
            src="/img/logo.png"
          />
          <img className="partner-icon" alt="" src="/img/v4.png" />
        </div>
        <div className="partner-details">
          <h1 className="mentalkucom">Mentalku.com</h1>
          <div className="partner-description">
            <div className="partner-description-child" />
            <h2 className="salah-satu-website">
              Salah satu website pelayanan Kesehatan Mental yang akan membuat
              pengguna menikmati layanan kesehatan mental secara online dan akan
              mempengaruhi pengidap untuk segera konsultasi kepada para ahli
              agar mengetahui diagnosa penyakitnya secara mudah dan tentunya
              tanpa dipungut biaya apapun atau gratis. Website ini juga
              memberikan edukasi seputar kesehatan mental dari pengertian,
              gejala, jenis, dan cara menangani sebelum terlambat, sehingga
              orang akan lebih teredukasi dan berhati-hati sedari awal.
            </h2>
          </div>
        </div>
      </div>
      <div className="additional-image">
        <div className="additional-image-child" />
        <img className="image-9-icon1" alt="" src="/img/image 9.png" />
      </div>
    </section>
  );
};

export default Partner;
