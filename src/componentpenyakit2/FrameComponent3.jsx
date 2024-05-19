import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <section className="diseases-footer">
      <div className="footer-content">
        <div className="footer-title">
          <h1 className="penyakit-lainnya1">Penyakit Lainnya</h1>
        </div>
        <div className="diseases-list">
          <div className="list-content">
            <img
              className="mask-group-icon1"
              alt=""
              src="/mask-group-2@2x.png"
            />
            <div className="schizophrenia-parent">
              <h2 className="skizofrenia">Skizofrenia</h2>
            </div>
            <div className="schizophrenia-more">
              <i className="see-more1">See more</i>
            </div>
          </div>
          <div className="sleep-mask">
            <div className="sleep-parent">
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
            <div className="sleep-content">
              <div className="sleep-o-c-d">
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

export default FrameComponent3;
