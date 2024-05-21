import "./DisorderExamples.css";

const DisorderExamples = () => {
  return (
    <section className="home-2-inner1">
      <div className="kami-membantu-orang-orang-ya-parent">
        {/* <h1 className="kami-membantu-orang">
          Kami membantu orang - orang yang hidup dengan berbagai kondisi
          kesehatan mental.
        </h1> */}
        <div className="frame-parent10">
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
          <div className="rectangle-parent6">
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

export default DisorderExamples;
