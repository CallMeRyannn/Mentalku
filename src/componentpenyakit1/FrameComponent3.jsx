import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <section className="other-diseases-header-wrapper">
      <div className="other-diseases-header">
        <div className="penyakit-lainnya-container">
          <h1 className="penyakit-lainnya1">Penyakit lainnya</h1>
        </div>
        <div className="other-diseases-list">
          <div className="disease-items">
            <img
              className="mask-group-icon1"
              alt=""
              src="/mask-group-2@2x.png"
            />
            <div className="skizofrenia-wrapper">
              <h2 className="skizofrenia">Skizofrenia</h2>
            </div>
            <div className="see-more-button">
              <i className="see-more1">See more</i>
            </div>
          </div>
          <div className="frame-group">
            <div className="mask-group-parent">
              <img
                className="mask-group-icon2"
                alt=""
                src="/mask-group-3@2x.png"
              />
              <img
                className="mask-group-icon3"
                alt=""
                src="/mask-group-4@2x.png"
              />
            </div>
            <div className="frame-wrapper">
              <div className="frame-container">
                <div className="gangguan-tidur-parent">
                  <h2 className="gangguan-tidur">Gangguan Tidur</h2>
                  <i className="see-more2">See more</i>
                </div>
                <div className="gangguan-ocd-parent">
                  <h2 className="gangguan-ocd">Gangguan OCD</h2>
                  <i className="see-more3">See more</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
