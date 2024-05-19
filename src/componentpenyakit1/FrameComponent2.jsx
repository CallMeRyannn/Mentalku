import FrameComponent from "./FrameComponent";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="disease-directory">
      <div className="directory-header">
        <div className="bipolar-parent">
          <h1 className="bipolar">Bipolar</h1>
          <div className="penyakit-lainnya-wrapper">
            <h3 className="penyakit-lainnya">Penyakit lainnya</h3>
          </div>
        </div>
        <div className="bipolar-description">
          <div className="bipolar-adalah-gangguan-suasan-wrapper">
            <h2 className="bipolar-adalah-gangguan-container">
              <p className="bipolar-adalah-gangguan">
                Bipolar adalah gangguan suasana hati yang ditandai dengan
                perubahan suasana hati yang ekstrem antara periode mania yang
                tinggi dan periode depresi yang rendah. Orang dengan gangguan
                bipolar dapat mengalami episode mania, di mana mereka merasa
                sangat bersemangat, energik, impulsif, dan mungkin memiliki
                pandangan diri yang terlalu tinggi. Di sisi lain, mereka juga
                mengalami episode depresi, di mana mereka merasa sedih, putus
                asa, kehilangan minat atau kesenangan pada aktivitas
                sehari-hari, dan mungkin mengalami gangguan tidur atau makan.
              </p>
              <p className="gangguan-bipolar-terbagi">
                Gangguan bipolar terbagi menjadi beberapa jenis, termasuk
                bipolar I, bipolar II, dan cyclothymic disorder. Pengobatan
                untuk bipolar meliputi terapi psikologis, obat-obatan
                stabilisator suasana hati, dan kadang-kadang terapi
                elektrokonvulsif untuk kasus yang lebih parah. Penting untuk
                mendapatkan diagnosis dan pengobatan yang tepat jika seseorang
                mengalami gejala bipolar agar dapat mengelola kondisi mereka
                dengan baik.
              </p>
            </h2>
          </div>
          <div className="disease-examples">
            <FrameComponent
              maskGroup="/mask-group@2x.png"
              kecemasanUmum="Kecemasan Umum"
            />
            <FrameComponent
              maskGroup="/mask-group-1@2x.png"
              kecemasanUmum="Depresi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
