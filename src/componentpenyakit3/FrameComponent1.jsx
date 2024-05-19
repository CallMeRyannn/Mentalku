import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="other-disease-content-wrapper">
      <div className="other-disease-content">
        <div className="other-label-container">
          <h1 className="penyakit-lainnya1">Penyakit lainnya</h1>
        </div>
        <div className="other-disease-items">
          <div className="disease-item">
            <img
              className="mask-group-icon2"
              alt=""
              src="/mask-group-2@2x.png"
            />
            <div className="item-label">
              <h2 className="skizofrenia">Skizofrenia</h2>
            </div>
            <div className="see-more-button">
              <i className="see-more2">See more</i>
            </div>
          </div>
          <div className="other-items">
            <div className="other-item-masks">
              <img
                className="mask-group-icon3"
                alt=""
                src="/mask-group-3@2x.png"
              />
              <img
                className="mask-group-icon4"
                alt=""
                src="/mask-group-4@2x.png"
              />
            </div>
            <div className="other-disease-links">
              <div className="other-link-names">
                <div className="other-link-labels">
                  <h2 className="gangguan-tidur">Gangguan Tidur</h2>
                  <i className="see-more3">See more</i>
                </div>
                <div className="other-link-labels1">
                  <h2 className="gangguan-ocd">Gangguan OCD</h2>
                  <i className="see-more4">See more</i>
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
