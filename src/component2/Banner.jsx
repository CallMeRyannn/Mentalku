import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <div className="content-inner">
          <div className="frame-child" />
        </div>
        <div className="frame-group">
          <div className="direktori-penyakit-parent">
            <h1 className="direktori-penyakit1">Direktori Penyakit</h1>
            <h1 className="pelajari-dan-pahami">Pelajari dan Pahami</h1>
          </div>
          <h1 className="jenis-penyakit-mental">
            Jenis penyakit mental yang dapat memberikan pengetahuan yang baru
            untuk anda !
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
