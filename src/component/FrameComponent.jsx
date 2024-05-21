import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <footer className="frame-footer">
      <div className="frame-child3" />
      <div className="contact-container">
        <div className="img-20240506-233046-1-parent">
          <img
            className="img-20240506-233046-1-icon"
            loading="lazy"
            alt=""
            src="/img-20240506-233046-1@2x.png"
          />
          <div className="contact-parent">
            <h3 className="contact">Contact</h3>
            <div className="frame-container">
              <div className="detail-pair-parent">
                <div className="detail-pair">
                  <img
                    className="call-icon"
                    loading="lazy"
                    alt=""
                    src="/call.svg"
                  />
                  <div className="email-address">
                    (0232) 8990 5556, 890 5557
                  </div>
                </div>
                <div className="detail-pair1">
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
          className="bottom-image-icon"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <div className="frame-parent1">
          <div className="footer-icon-wrapper">
            <img className="footer-icon" alt="" src="/vector-2.svg" />
          </div>
          <div className="copyright-2024-mentalkuid">
            copyright 2024 @mentalku.id
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
