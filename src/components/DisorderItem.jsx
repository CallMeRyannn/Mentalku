import "./DisorderItem.css";

const DisorderItem = () => {
  return (
    <section className="frame-section">
      <div className="kami-membantu-orang-orang-ya-parent">
        <h1 className="kami-membantu-orang">
        </h1>
        <div className="frame-parent7">
          <div className="placeholder-icon-parent">
            <img
              className="placeholder-icon"
              loading="lazy"
              alt=""
              src="/img/gangguan.png"
            />
            <div className="gangguan-tidur-wrapper">
              <h2 className="gangguan-tidur">Gangguan Tidur</h2>
            </div>
          </div>
          <div className="placeholder-icon-group">
            <img
              className="placeholder-icon1"
              loading="lazy"
              alt=""
              src="/img/bipolar.png"
            />
            <div className="bipolar-wrapper">
              <h2 className="bipolar">Bipolar</h2>
            </div>
          </div>
          <div className="rectangle-parent4">
            <img
              className="rectangle-icon"
              alt=""
              src="/img/kecemasan.png"
            />
            <div className="kecemasan-umum-wrapper">
              <h2 className="kecemasan-umum">Kecemasan Umum</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisorderItem;
