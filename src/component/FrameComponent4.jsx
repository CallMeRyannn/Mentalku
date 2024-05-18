import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <div className="consultation-box-wrapper">
      <div className="consultation-box">
        <div className="box-background" />
        <div className="consultation-box-inner">
          <div className="frame-group">
            <div className="konsultasi-online-container">
              <h1 className="konsultasi-online2">Konsultasi Online</h1>
            </div>
            <div className="saya-mengundangmu-untuk-mengam-parent">
              <div className="saya-mengundangmu-untuk">
                Saya mengundangmu untuk mengambil langkah pertama dengan
                konsultasi psikolog online. Bersama, kita dapat menemukan solusi
                dan menghadapi tantangan hidup dengan lebih baik. Jangan ragu
                untuk mencari bantuan, karena kita tidak sendirian dalam
                perjalanan ini
              </div>
              <img
                className="healthiconsv"
                loading="lazy"
                alt=""
                src="/healthiconsv.svg"
              />
              <b className="tanyakan-dibawah-ini">TANYAKAN DIBAWAH INI</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
