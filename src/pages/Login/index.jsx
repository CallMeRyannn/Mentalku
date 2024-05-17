import "./style.css";

const Login = () => {
  return (
    <div className="masuk">
      <div className="main">
        <img className="bg-icon" loading="lazy" alt="" src="/img/bg1.png" />
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
                <div className="alamat-email">Alamat Email</div>
                <input className="bg" type="email" />
              </div>
              <div className="input-fields1">
                <div className="kata-sandi">Kata Sandi</div>
                <input className="bg1" type="password" />
              </div>
              <div className="remember">
                <div className="remember-toggle">
                  <input className="check-mark" type="checkbox" />
                  <div className="ingat-saya">Ingat saya</div>
                </div>
                <a href="/src/pages/Registration/index.jsx">
                  <div className="lupa-password">Lupa password?</div>
                </a>
              </div>
            </div>
          </div>
          <div className="action">
            <button className="buttonprimarywith-icon">
              <div className="button-content">
                <div className="button-name"> Masuk</div>
                <div className="icon">
                  <img
                    className="iconoutlinearrow-right"
                    alt=""
                    src="/iconoutlinearrowright.svg"
                  />
                </div>
              </div>
            </button>
            <div className="signup">
                <div className="belum-punya-akun">Belum punya akun?</div>
                <a href="/src/pages/Registration/index.jsx">
                  <div className="daftar">Daftar</div>
                </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login
