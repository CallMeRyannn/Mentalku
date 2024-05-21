import FrameComponent3 from "./FrameComponent3";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="direktori-penyakit-4-inner">
      <div className="frame-container">
        <div className="skizofrenia-parent">
          <h1 className="skizofrenia">Skizofrenia</h1>
          <div className="penyakit-lainnya-wrapper">
            <h3 className="penyakit-lainnya">Penyakit lainnya</h3>
          </div>
        </div>
        <div className="description-content-parent">
          <div className="description-content">
            <h2 className="skizofrenia-adalah-gangguan-container">
              <p className="skizofrenia-adalah-gangguan">
                Skizofrenia adalah gangguan mental serius yang memengaruhi
                pemikiran, perasaan, dan perilaku seseorang. Ini adalah kondisi
                kompleks yang dapat memunculkan gejala yang bervariasi dari
                individu ke individu. Gejala skizofrenia sering kali terjadi
                dalam episode yang disebut episode psikotik, yang dapat
                melibatkan delusi (keyakinan yang tidak sesuai dengan kenyataan)
                dan halusinasi (persepsi sensorik yang tidak ada).
              </p>
              <p className="diagnosis-skizofrenia-didasark">
                Diagnosis skizofrenia didasarkan pada gejala-gejala klinis yang
                meliputi delusi, halusinasi, pikiran kacau atau disorganisasi,
                bicara yang tidak teratur, perilaku yang terganggu, serta
                disfungsi dalam fungsi sosial atau pekerjaan. Gejala ini dapat
                berkembang secara bertahap atau muncul secara tiba-tiba, dan
                sering kali berlangsung selama berbulan-bulan atau bahkan
                bertahun-tahun.
              </p>
            </h2>
          </div>
          <div className="frame-div">
            <FrameComponent3 maskGroup="/mask-group@2x.png" bipolar="Bipolar" />
            <FrameComponent3
              maskGroup="/mask-group-1@2x.png"
              bipolar="Kecemasan Umum"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
