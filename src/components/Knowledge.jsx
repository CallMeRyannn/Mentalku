import "./Knowledge.css";
import {Link} from "react-router-dom";
// import imageSrc from "../../img/image 59.png";

const Knowledge = () => {
  return (
    <section className="knowledge">
      <div className="knowledge-content">
        <div className="knowledge-content-child" />
        <div className="knowledge-header">
        {/* <img src={imageSrc} alt="Knowledge Image" className="knowledge-image" /> */}
          <div className="knowledge-header-child" />
          <div className="knowledge-title-container">
            <h1 className="koleksi-pengetahuan">KOLEKSI PENGETAHUAN</h1>
          </div>
          <div className="knowledge-info">
            <div className="knowledge-description">
              <div className="description-header">
                <h1 className="pelajari-dan-pahami">{`Pelajari dan Pahami `}</h1>
                <h1 className="kesehatan-mental">Kesehatan Mental</h1>
              </div>
              <div className="jelajahi-koleksi-pengetahuan">
                Jelajahi koleksi pengetahuan dan temukan jawaban dari semua
                pertanyanmu mengenai kesehatan mental
              </div>
            </div>
            <Link to="#">
            <div className="kunjungi-koleksi-pengetahuan">{`Kunjungi Koleksi Pengetahuan >`}</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
