import "./DoctorCard.css";

const DoctorCard = () => {
  return (
    <section className="doctor-card">
      <div className="doctor-card-inner">
        <div className="doctor-info">
          <div className="doctor-info-child" />
          <div className="doctor-details">
            <div className="doctor-image-and-name">
              <img
                className="image-1-icon"
                loading="lazy"
                alt=""
                src="/img/image 1.png"
              />
              <div className="doctor-names">
                <div className="doctor-names-child" />
                <h2 className="dr-agraini-spkj">Dr. Agraini, Sp.KJ</h2>
              </div>
            </div>
            <div className="doctor-specialty">
              <div className="doctor-specialty-child" />
              <h2 className="spesialis-kesehatan-mental">
                Spesialis Kesehatan Mental
              </h2>
            </div>
          </div>
          <div className="doctor-availability">
            <div className="senin-dan-selasa">
              Senin dan Selasa (13.00 - 16.00)
            </div>
          </div>
        </div>
        <div className="doctor-info1">
          <div className="doctor-info-item" />
          <div className="frame-container">
            <div className="image-3-parent">
              <img
                className="image-3-icon"
                loading="lazy"
                alt=""
                src="/img/image 3.png"
              />
              <div className="frame-div">
                <div className="rectangle-div" />
                <h2 className="dr-cinta-yuni">
                  Dr. Cinta Yuni Pratami, Sp. KJ
                </h2>
              </div>
            </div>
            <div className="rectangle-parent1">
              <div className="frame-child1" />
              <div className="spesialis-kesehatan-mental1">
                Spesialis Kesehatan Mental
              </div>
            </div>
          </div>
          <div className="rabu-dan-kamis-0800-1500-wrapper">
            <div className="rabu-dan-kamis">Rabu dan Kamis (08.00 - 15.00)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorCard;
