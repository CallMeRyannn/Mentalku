import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-child" />
      <div className="content-footer">
        <div className="footer-content">
          <img
            className="img-20240506-233046-1-icon"
            loading="lazy"
            alt=""
            src="/img-20240506-233046-1@2x.png"
          />
          <div className="contacts">
            <h2 className="contact">Contact</h2>
            <div className="communication">
              <div className="communication-options">
                <div className="communication-pair">
                  <img
                    className="call-icon"
                    loading="lazy"
                    alt=""
                    src="/call.svg"
                  />
                  <div className="details-contact">
                    (0232) 8990 5556, 890 5557
                  </div>
                </div>
                <div className="communication-pair1">
                  <img
                    className="message-icon"
                    loading="lazy"
                    alt=""
                    src="/message.svg"
                  />
                  <div className="mentalkugmailcom">mentalku@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="footer-decoration-icon"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <div className="copyright">
          <div className="vector-container">
            <img className="vector-icon1" alt="" src="/vector-21.svg" />
          </div>
          <div className="copyright-2024-mentalkuid">
            copyright 2024 @mentalku.id
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
