import "./style.css";
import { Link } from 'react-router-dom';

const ResetPw = () => {
  return (
    <div className="lupa-kata-sandi">
      <img className="bg-icon" loading="lazy" alt="" src="/img/bg1.png" />
      <div className="email-form">
        <div className="email-input-container">
          <div className="email-input-label">
            <h1 className="lupa-kata-sandi1">Lupa Kata Sandi?</h1>
          </div>
          <div className="masukkan-alamat-email">
            Masukkan alamat email yang terkait dengan akun anda untuk
            mendapatkan kode.
          </div>
          <div className="email-input-field-wrapper">
            <div className="email-input-field">
              <div className="email-input-field-child" />
              <input
                className="masukkan-alamat-email1"
                placeholder="Masukkan alamat email"
                type="text"
              />
            </div>
          </div>
          <div className="buttons">
            <button className="submit-button">
              <div className="submit-button-child" />
              <div className="kirim-kode">Kirim Kode</div>
            </button>
            <div className="login-link">
              <Link to="/login">
              <div className="kembali-untuk-masuk">Kembali untuk masuk</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPw;
