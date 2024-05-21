import "./FooterProfile.css";

const FooterProfile = () => {
  return (
    <footer className="rectangle-parent">
      <div className="rectangle-div" />
      <div className="contact-content">
        <div className="img-20240506-233046-1-parent">
          <img
            className="img-20240506-233046-1-icon"
            loading="lazy"
            alt=""
            src="/img-20240506-233046-1@2x.png"
          />
          <div className="contact-info">
            <h3 className="contact">Contact</h3>
            <div className="contact-details">
              <div className="contact-options">
                <div className="contact-items">
                  <img
                    className="call-icon"
                    loading="lazy"
                    alt=""
                    src="/call.svg"
                  />
                  <div className="contact-option-details">
                    (0232) 8990 5556, 890 5557
                  </div>
                </div>
                <div className="contact-items1">
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
          className="contact-content-child"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <div className="footer">
          <div className="footer-content">
            <img className="vector-icon2" alt="" src="/vector-21.svg" />
          </div>
          <div className="copyright-2024-mentalkuid">
            copyright 2024 @mentalku.id
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterProfile;
