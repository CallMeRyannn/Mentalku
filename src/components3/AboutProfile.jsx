import "./AboutProfile.css";

const AboutProfile = () => {
  return (
    <div className="about-content">
      <div className="about-content-child" />
      <div className="about-columns">
        <div className="line-parent">
          <img className="frame-child" loading="lazy" alt="" />
          <img className="frame-item" loading="lazy" alt="" />
        </div>
      </div>
      <div className="about-description">
        <div className="tentang-mentalkucom-wrapper">
          <h2 className="tentang-mentalkucom"> Tentang Mentalku.com</h2>
        </div>
        <div className="frame-group">
          <div className="image-9-wrapper">
            <img
              className="image-9-icon"
              loading="lazy"
              alt=""
              src="/image-9@2x.png"
            />
          </div>
          <div className="salah-satu-website">
            Salah satu website pelayanan Kesehatan Mental yang akan membuat
            pengguna menikmati layanan kesehatan mental secara online dan akan
            mempengaruhi pengidap untuk segera konsultasi kepada para ahli agar
            mengetahui diagnosa penyakitnya secara mudah dan tentunya tanpa
            dipungut biaya apapun atau gratis. Website ini juga memberikan
            edukasi seputar kesehatan mental dari pengertian, gejala, jenis, dan
            cara menangani sebelum terlambat, sehingga orang akan lebih
            teredukasi dan berhati-hati sedari awal.
          </div>
        </div>
      </div>
      <div className="vision-mission">
        <div className="vision-mission-content">
          <div className="vision-mission-header">
            <h2 className="visi-misi">{`Visi & Misi`}</h2>
            <div className="vision-mission-header-inner">
              <div className="line-group">
                <img className="frame-inner" loading="lazy" alt="" />
                <img className="line-icon" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="visi-menjadi-sumber-container">
          <p className="visi">VISI</p>
          <p className="menjadi-sumber-utama">
            Menjadi sumber utama bagi individu yang mencari bantuan dan panduan
            dalam berbagai aspek kehidupan mereka melalui konsultasi online yang
            mudah diakses dan gratis.
          </p>
          <p className="misi">MISI</p>
          <ol className="memberikan-akses-mudah-dan-gra">
            <li className="memberikan-akses-mudah-dan-gra1">
              <span>
                Memberikan akses mudah dan gratis bagi individu dari berbagai
                latar belakang untuk berkonsultasi tentang permasalahan yang
                mereka hadapi.
              </span>
            </li>
            <li className="menyediakan-platform-yang-aman">
              <span>
                Menyediakan platform yang aman dan terpercaya untuk berbagi
                pengalaman, pengetahuan, dan saran kepada mereka yang
                membutuhkan.
              </span>
            </li>
            <li className="mempromosikan-kesehatan-mental">
              <span>
                Mempromosikan kesehatan mental dan kesejahteraan secara luas
                dengan menyediakan konseling dan panduan yang mendalam.
              </span>
            </li>
            <li className="menghubungkan-para-konselor-pr">
              <span>
                Menghubungkan para konselor profesional dengan individu yang
                membutuhkan bantuan, memfasilitasi pertukaran informasi yang
                bermanfaat dan berdampak positif.
              </span>
            </li>
            <li className="berkomitmen-untuk-menjaga-kera">
              <span>
                Berkomitmen untuk menjaga keragaman dan inklusi, menghormati dan
                memahami keberagaman budaya, latar belakang, dan kebutuhan
                individu yang mencari bantuan.
              </span>
            </li>
            <li>
              <span>
                Terus mengembangkan dan meningkatkan layanan kami berdasarkan
                umpan balik dari pengguna, untuk memastikan kepuasan dan
                kebermanfaatan yang maksimal.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
