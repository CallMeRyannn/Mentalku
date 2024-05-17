import "./style2.css";

const Registration = () => {
  return (
    <div className="daftar1">
      <form className="frame-parent">
        <div className="daftar-wrapper">
          <h1 className="daftar2">Daftar</h1>
        </div>
        <div className="silahkan-atur-akun-anda-wrapper">
          <div className="silahkan-atur-akun">Silahkan atur akun Anda!</div>
        </div>
        <div className="input-wrapper">
          <div className="input">
            <div className="email-wrapper">
              <div className="email">
                <div className="nama">Nama</div>
                <input className="bg2" type="text" />
              </div>
            </div>
            <div className="alamat-email-parent">
              <div className="alamat-email1">Alamat Email</div>
              <input className="bg3" type="text" />
            </div>
            <div className="password">
              <div className="kata-sandi1">Kata Sandi</div>
              <input className="bg4" type="text" />
            </div>
            <div className="password1">
              <div className="konfirmasi-kata-sandi">Konfirmasi Kata Sandi</div>
              <input className="bg5" type="text" />
            </div>
          </div>
        </div>
        <div className="buttonprimarywith-icon-parent">
          <button className="buttonprimarywith-icon1">
            <div className="button-name-parent">
              <div className="button-name1">Daftar</div>
              <div className="icon1">
                <img
                  className="iconoutlinearrow-right1"
                  alt=""
                  src="/iconoutlinearrowright.svg"
                />
              </div>
            </div>
          </button>
          <div className="sudah-punya-akun">Sudah punya akun? Masuk</div>
        </div>
      </form>
      <img className="bg-icon1" alt="" src="/img/bg1.png" />
    </div>
  );
};

export default Registration
