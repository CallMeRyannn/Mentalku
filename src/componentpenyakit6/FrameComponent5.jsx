import "./FrameComponent5.css";

const FrameComponent5 = () => {
  return (
    <footer className="rectangle-parent">
      <div className="frame-child" />
      <div className="contact-container">
        <div className="contact-info">
          <img
            className="img-20240506-233046-1-icon"
            loading="lazy"
            alt=""
            src="/img-20240506-233046-1@2x.png"
          />
          <div className="contact-details">
            <h3 className="contact">Contact</h3>
            <div className="contact-methods">
              <div className="contact-options">
                <div className="contact-labels">
                  <img
                    className="call-icon"
                    loading="lazy"
                    alt=""
                    src="/call.svg"
                  />
                  <div className="contact-email">
                    (0232) 8990 5556, 890 5557
                  </div>
                </div>
                <div className="contact-labels1">
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
          className="contact-divider-icon"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <div className="footer">
          <div className="footer-icon">
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

export default FrameComponent5;
