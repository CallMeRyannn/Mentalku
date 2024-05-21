import "./style.css";
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="daftar">
      <form className="frame-group">
        <div className="daftar-wrapper">
          <h1 className="daftar1">Daftar</h1>
        </div>
        <div className="silahkan-atur-akun-anda-wrapper">
          <div className="silahkan-atur-akun">Silahkan atur akun Anda!</div>
        </div>
        <div className="input-wrapper">
          <div className="input">
            <div className="email-wrapper">
              <div className="email">
                <div className="nama">Nama</div>
                <input className="bg" type="text" />
              </div>
            </div>
            <div className="alamat-email-parent">
              <div className="alamat-email">Alamat Email</div>
              <input className="bg1" type="text" />
            </div>
            <div className="password">
              <div className="kata-sandi">Kata Sandi</div>
              <input className="bg2" type="password" />
            </div>
            <div className="password1">
              <div className="konfirmasi-kata-sandi">Konfirmasi Kata Sandi</div>
              <input className="bg3" type="password" />
            </div>
          </div>
        </div>
        <div className="buttonprimarywith-icon-parent">
          <button className="buttonprimarywith-icon">
            <div className="button-name-parent">
              <div className="button-name">Daftar</div>
              <div className="icon2">
                <img
                  className="iconoutlinearrow-right"
                  alt=""
                  src="/iconoutlinearrowright.svg"
                />
              </div>
            </div>
          </button>
          <Link to="/login">
          <div className="sudah-punya-akun">Sudah punya akun? Masuk</div>
          </Link>
        </div>
      </form>
      <img className="bg-icon" alt="" src="/img/bg1.png" />
    </div>
  );
};

export default Registration;
