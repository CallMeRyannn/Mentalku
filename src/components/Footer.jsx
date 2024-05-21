import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-child" />
      <div className="contact-container">
        <div className="contact-details">
          <img
            className="img-20240506-233046-1-icon"
            loading="lazy"
            alt=""
            src="/img/logo4.png"
          />
          <div className="contact-info">
            <h3 className="contact">Contact</h3>
            <div className="contact-methods">
              <div className="communication-options">
                <div className="contact-type">
                  <img
                    className="call-icon"
                    loading="lazy"
                    alt=""
                    src="/img/Call.png"
                  />
                  <div className="contact-details1">
                    (0232) 8990 5556, 890 5557
                  </div>
                </div>
                <div className="contact-type1">
                  <img
                    className="message-icon"
                    loading="lazy"
                    alt=""
                    src="/img/Message.png"
                  />
                  <div className="mentalkugmailcom">mentalku@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="social-media-icons" alt="" src="/vector-4-1.svg" />
        <div className="copyright-info">
          <div className="copyright-details">
            <img
              className="copyright-logo-icon"
              loading="lazy"
              alt=""
              src="/img/Vector.png"
            />
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
