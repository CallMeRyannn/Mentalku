import FrameComponent3 from "./FrameComponent3";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <div className="form-container-inner">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <FrameComponent3
          konsultasiOnline="Konsultasi Online"
          shortDivider="pending_2054:1372"
          line6="pending_2054:1374"
        />
        <form className="input-field-container-parent">
          <div className="input-field-container">
            <div className="icon-pair-parent">
              <div className="icon-pair">
                <div className="field-icon-pair">
                  <div className="field-icon-pair-child" />
                  <img
                    className="icon-park-outlinepeople"
                    alt=""
                    src="/iconparkoutlinepeople.svg"
                  />
                </div>
                <div className="field-label-pair">
                  <div className="field-label-pair-child" />
                  <div className="nama">Nama</div>
                </div>
              </div>
              <div className="icon-pair1">
                <div className="rectangle-group">
                  <div className="frame-item" />
                  <img
                    className="icoutline-email-icon"
                    loading="lazy"
                    alt=""
                    src="/icoutlineemail.svg"
                  />
                </div>
                <div className="rectangle-container">
                  <div className="frame-inner" />
                  <div className="email">Email</div>
                </div>
              </div>
            </div>
            <div className="job-pair-wrapper">
              <div className="job-pair">
                <div className="job-icon-pair">
                  <div className="work-icon-pair">
                    <div className="work-icon-pair-child" />
                    <img
                      className="pajamaswork-icon"
                      loading="lazy"
                      alt=""
                      src="/pajamaswork.svg"
                    />
                  </div>
                  <div className="job-label-pair">
                    <div className="job-label-pair-child" />
                    <div className="pekerjaan">Pekerjaan</div>
                  </div>
                </div>
                <div className="job-icon-pair1">
                  <div className="frame-div">
                    <div className="rectangle-div" />
                    <img
                      className="ictwotone-question-mark-icon"
                      alt=""
                      src="/ictwotonequestionmark.svg"
                    />
                  </div>
                  <div className="rectangle-parent1">
                    <div className="frame-child1" />
                    <input
                      className="keluhan"
                      placeholder="Keluhan"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-container-wrapper">
            <div className="button-container">
              <button className="button-pair">
                <div className="button-pair-child" />
                <b className="batal">Batal</b>
              </button>
              <button className="button-pair1">
                <div className="button-pair-item" />
                <b className="kirim">Kirim</b>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FrameComponent2;
