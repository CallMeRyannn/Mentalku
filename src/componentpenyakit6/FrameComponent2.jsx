import FrameComponent from "./FrameComponent";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <div className="o-c-d-info-parent">
      <div className="o-c-d-info">
        <h1 className="gangguan-obsessive-compulsive">
          Gangguan Obsessive-Compulsive Disorder (OCD)
        </h1>
        <h2 className="obsesif-kompulsif-disorder-oc-container">
          <p className="obsesif-kompulsif-disorder-oc">
            Obsesif-Kompulsif Disorder (OCD) adalah gangguan mental yang
            ditandai oleh adanya obsesi yang tidak diinginkan dan kuat, serta
            kompulsi yang tak terhindarkan dan berulang. Obsesi adalah pikiran,
            dorongan, atau gambar yang menimbulkan kecemasan atau
            ketidaknyamanan yang signifikan, sedangkan kompulsi adalah perilaku
            atau tindakan yang dilakukan untuk meredakan kecemasan yang
            disebabkan oleh obsesi, meskipun seringkali tidak masuk akal atau
            tidak efektif.
          </p>
          <p className="gejala-obsesi-ocd">
            Gejala obsesi OCD dapat beragam, tetapi beberapa contoh meliputi
            ketakutan akan kontaminasi, ketakutan akan kecelakaan atau
            kesalahan, kebutuhan untuk simetri atau ketertiban yang sempurna,
            atau pikiran intrusif tentang hal-hal yang bertentangan dengan nilai
            atau keyakinan pribadi. Kompulsi dapat berupa perilaku fisik seperti
            mencuci tangan berulang kali, memeriksa atau menghitung hal-hal
            berulang kali, atau melakukan ritual tertentu secara berulang.
          </p>
        </h2>
      </div>
      <div className="other-diseases">
        <div className="other-diseases-container">
          <div className="other-diseases-title">
            <h3 className="penyakit-lainnya">Penyakit lainnya</h3>
            <FrameComponent maskGroup="/mask-group@2x.png" bipolar="Bipolar" />
          </div>
          <FrameComponent
            maskGroup="/mask-group-1@2x.png"
            bipolar="Kecemasan Umum"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
