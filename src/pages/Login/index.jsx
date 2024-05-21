import "./style.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="masuk">
      <div className="main">
        <img className="bg-icon1" loading="lazy" alt="" src="/img/bg1.png" />
        <div className="shape" />
      </div>
      <div className="content">
        <form className="login">
          <div className="details">
            <div className="welcome">
              <h1 className="masuk1">Masuk</h1>
              <div className="hai-selamat-datang">
                Hai! Selamat datang kembali!
              </div>
            </div>
            <div className="credentials">
              <div className="input-fields">
                <div className="alamat-email1">Alamat Email</div>
                <input className="bg4" type="text" />
              </div>
              <div className="input-fields1">
                <div className="kata-sandi1">Kata Sandi</div>
                <input className="bg5" type="password" />
              </div>
              <div className="remember">
                <div className="remember-toggle">
                  <input className="check-mark" type="checkbox" />
                  <div className="ingat-saya">Ingat saya</div>
                </div>
                <Link to="/lupapassword">
                <div className="lupa-password">Lupa password?</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="action">
            <button className="buttonprimarywith-icon1">
              <div className="button-content">
                <Link to="/">
                <div className="button-name1"> Masuk</div>
                </Link>
                <div className="icon3">
                  <img
                    className="iconoutlinearrow-right1"
                    alt=""
                    src="/iconoutlinearrowright.svg"
                  />
                </div>
              </div>
            </button>
            <div className="signup">
              <div className="belum-punya-akun">Belum punya akun?</div>
              <Link to="/registration">
              <div className="daftar2">Daftar</div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
