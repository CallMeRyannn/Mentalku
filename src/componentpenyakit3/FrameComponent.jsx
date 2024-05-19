import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="disease-content-wrapper">
      <div className="disease-content">
        <div className="disease-types">
          <h1 className="depresi">Depresi</h1>
          <div className="other-disease-label">
            <h3 className="penyakit-lainnya">Penyakit lainnya</h3>
          </div>
        </div>
        <div className="depression-info">
          <div className="depression-desc">
            <h2 className="depresi-adalah-gangguan-container">
              <p className="depresi-adalah-gangguan">
                Depresi adalah gangguan mental yang ditandai oleh perasaan
                sedih, putus asa, kehilangan minat atau kesenangan dalam
                aktivitas yang biasanya menyenangkan, serta gangguan tidur,
                nafsu makan, energi, dan konsentrasi. Ini adalah kondisi yang
                serius yang dapat memengaruhi cara seseorang berpikir, merasa,
                dan berperilaku, serta dapat memengaruhi fungsi sehari-hari dan
                kualitas hidup secara keseluruhan.
              </p>
              <p className="gejala-depresi-dapat">
                Gejala depresi dapat bervariasi dari individu ke individu,
                tetapi beberapa gejala umum meliputi perasaan sedih atau hampa,
                kehilangan minat dalam aktivitas yang biasanya dinikmati,
                perubahan berat badan atau nafsu makan, gangguan tidur (terlalu
                banyak atau terlalu sedikit tidur), kelelahan atau kekurangan
                energi, perasaan bersalah atau tidak berharga, pikiran tentang
                kematian atau bunuh diri, kesulitan berkonsentrasi, dan
                perubahan dalam pola perilaku seperti retret sosial atau
                isolasi.
              </p>
            </h2>
          </div>
          <div className="depression-images">
            <div className="masked-image">
              <img
                className="mask-group-icon"
                alt=""
                src="/mask-group@2x.png"
              />
              <img
                className="image-28-icon"
                loading="lazy"
                alt=""
                src="/image-28@2x.png"
              />
            </div>
            <img
              className="mask-group-icon1"
              alt=""
              src="/mask-group-1@2x.png"
            />
          </div>
          <div className="related-diseases">
            <div className="related-disease-links">
              <div className="related-disease-names">
                <b className="bipolar">Bipolar</b>
                <i className="see-more">See more</i>
              </div>
              <div className="related-disease-names1">
                <b className="kecemasan-umum">Kecemasan Umum</b>
                <i className="see-more1">See more</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
