import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <div className="more-diseases">
      <div className="more-diseases-container">
        <div className="more-diseases-title">
          <h1 className="penyakit-lainnya1">Penyakit lainnya</h1>
        </div>
        <div className="disease-cards">
          <div className="disease-icons">
            <img
              className="mask-group-icon1"
              alt=""
              src="/mask-group-2@2x.png"
            />
            <div className="depresi-skizof">
              <h2 className="depresi">Depresi</h2>
            </div>
            <div className="disease-links">
              <i className="see-more1">See more</i>
            </div>
          </div>
          <div className="disease-icons1">
            <img
              className="mask-group-icon2"
              alt=""
              src="/mask-group-3@2x.png"
            />
            <div className="skizofrenia-wrapper">
              <h2 className="skizofrenia">Skizofrenia</h2>
            </div>
            <div className="see-more-wrapper">
              <i className="see-more2">See more</i>
            </div>
          </div>
          <div className="sleep-disorder">
            <div className="sleep-disorder-mask">
              <img
                className="mask-group-icon3"
                alt=""
                src="/mask-group-4@2x.png"
              />
            </div>
            <div className="sleep-disorder-info">
              <h2 className="gangguan-tidur">Gangguan Tidur</h2>
              <i className="see-more3">See more</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
