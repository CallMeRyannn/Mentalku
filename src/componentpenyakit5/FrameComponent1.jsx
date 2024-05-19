import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="other-diseases-content-wrapper">
      <div className="other-diseases-content">
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
            <div className="depression-item">
              <h2 className="depresi">Depresi</h2>
            </div>
            <div className="see-more-depression">
              <i className="see-more1">See more</i>
            </div>
          </div>
          <div className="other-diseases-grid">
            <div className="other-disease-masks">
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
            <div className="sleep-o-c-d-pair-wrapper">
              <div className="sleep-o-c-d-pair">
                <div className="sleep-o-c-d-items">
                  <h2 className="gangguan-tidur">Gangguan Tidur</h2>
                  <i className="see-more2">See more</i>
                </div>
                <div className="sleep-o-c-d-items1">
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

export default FrameComponent1;
