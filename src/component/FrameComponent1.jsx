import FrameComponent3 from "./FrameComponent3";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="rectangle-parent2">
      <div className="frame-child2" />
      <FrameComponent3
        konsultasiOnline="Petunjuk Konsultasi"
        shortDivider="pending_2054:1373"
        line6="pending_2054:1375"
        propWidth="unset"
        propAlignSelf="stretch"
        propPadding="0px 0px 0px 1px"
        propWidth1="315px"
      />
      <div className="lengkapi-form-pendaftaran-container">
        <ol className="lengkapi-form-pendaftaran-di-a">
          <li className="lengkapi-form-pendaftaran-di-a1">
            <span>Lengkapi Form Pendaftaran Di Atas</span>
          </li>
        </ol>
        <p className="masukkan-nama-pekerjaan">
          Masukkan Nama, Pekerjaan, Email dan keluhan anda. Email wajib
          menggunakan email yang masih aktif karena email ini untuk menerima
          jawaban dari konultasi anda.
        </p>
        <ol className="cek-kembali-data">
          <li className="cek-kembali-data1">
            <span>Cek Kembali Data</span>
          </li>
        </ol>
        <p className="cek-kembali-data2">
          Cek kembali data yang anda input. Pastikan semua benar.
        </p>
        <ol className="submit-data">
          <li className="submit-data1">
            <span>Submit Data</span>
          </li>
        </ol>
        <p className="setelah-data-yang">
          Setelah data yang anda input benar klik tombol “kirim”, setelah data
          terkirim. Admin akan menjawab keluhan anda dan mengirim jawabannya
          melalui email anda.
        </p>
      </div>
    </div>
  );
};

export default FrameComponent1;
