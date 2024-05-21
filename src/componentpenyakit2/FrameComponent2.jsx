import FrameComponent from "./FrameComponent";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="anxiety">
      <div className="anxiety-content">
        <div className="kecemasan-umum-anxiety-parent">
          <h1 className="kecemasan-umum-anxiety-container">
            <p className="kecemasan-umum">Kecemasan Umum</p>
            <p className="anxiety1">(Anxiety)</p>
          </h1>
          <h2 className="kecemasan-umum-atau-container">
            <p className="kecemasan-umum-atau">
              Kecemasan umum atau anxiety adalah gangguan mental yang ditandai
              oleh perasaan cemas yang berlebihan, tidak terkendali, dan kronis
              terhadap berbagai situasi atau peristiwa dalam kehidupan
              sehari-hari. Orang yang mengalami kecemasan umum cenderung merasa
              khawatir secara terus-menerus tentang berbagai hal, bahkan ketika
              tidak ada ancaman konkret yang ada. Mereka mungkin merasa tegang,
              gelisah, dan sulit untuk rileks atau beristirahat.
            </p>
            <p className="gejala-kecemasan-umum">
              Gejala kecemasan umum bisa beragam, termasuk ketegangan otot,
              denyut jantung yang cepat, napas pendek, gangguan tidur,
              konsentrasi yang buruk, serta ketakutan akan hal-hal yang tidak
              rasional. Kecemasan umum dapat memengaruhi berbagai aspek
              kehidupan seseorang, termasuk kesehatan fisik, kesejahteraan
              emosional, hubungan interpersonal, dan kinerja di tempat kerja
              atau sekolah.
            </p>
          </h2>
        </div>
        <div className="other-diseases">
          <div className="diseases-parent">
            <div className="other-diseases-title">
              <h3 className="penyakit-lainnya">Penyakit lainnya</h3>
              <FrameComponent
                maskGroup="/mask-group@2x.png"
                bipolar="Bipolar"
              />
            </div>
            <FrameComponent
              maskGroup="/mask-group-1@2x.png"
              bipolar="Depresi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
