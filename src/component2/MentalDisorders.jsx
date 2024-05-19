import FrameComponent from "./FrameComponent";
import "./MentalDisorders.css";

const MentalDisorders = () => {
  return (
    <section className="mental-disorders">
      <div className="grid">
        <div className="first-row">
          <FrameComponent
            rectangle167="/rectangle-167@2x.png"
            bipolar="Bipolar"
          />
          <FrameComponent
            rectangle167="/rectangle-168@2x.png"
            bipolar="Kecemasan Umum"
            propPadding="0px 6px 0px 0px"
            propMinWidth="unset"
            propWidth="211px"
          />
          <FrameComponent
            rectangle167="/rectangle-171@2x.png"
            bipolar="Depresi"
            propPadding="unset"
            propMinWidth="87px"
            propWidth="unset"
          />
        </div>
        <div className="second-row">
          <div className="incomplete-row">
            <div className="rectangle-group">
              <img
                className="frame-inner"
                loading="lazy"
                alt=""
                src="/rectangle-172@2x.png"
              />
              <div className="double-disorder">
                <div className="inner-double-disorder">
                  <div className="name-pair">
                    <h3 className="skizofrenia">Skizofrenia</h3>
                  </div>
                  <button className="double-button-container">
                    <div className="double-button-container-child" />
                    <b className="baca-disini1">BACA DISINI</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="rectangle-container">
              <img
                className="rectangle-icon"
                loading="lazy"
                alt=""
                src="/rectangle-166@2x.png"
              />
              <div className="frame-wrapper">
                <div className="frame-container">
                  <div className="gangguan-tidur-wrapper">
                    <h3 className="gangguan-tidur">Gangguan Tidur</h3>
                  </div>
                  <button className="frame-button">
                    <div className="rectangle-div" />
                    <b className="baca-disini2">BACA DISINI</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="o-c-d-container">
              <div className="o-c-d-container-inner">
                <img
                  className="frame-child1"
                  loading="lazy"
                  alt=""
                  src="/rectangle-173@2x.png"
                />
              </div>
              <div className="o-c-d-description">
                <h3 className="obsessive-compulsive-disorder">
                  Obsessive-Compulsive Disorder (OCD)
                </h3>
                <div className="o-c-d-button-container">
                  <button className="single-button-container">
                    <div className="single-button-container-child" />
                    <b className="baca-disini3">BACA DISINI</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalDisorders;
