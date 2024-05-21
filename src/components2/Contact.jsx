import "./Contact.css";

const Contact = () => {
  return (
    <footer className="contact1">
      <div className="contact-child" />
      <div className="contact-inner">
        <div className="contact-elements">
          <img
            className="img-20240506-233046-1-icon1"
            loading="lazy"
            alt=""
            src="/img/logo4.png"
          />
          <div className="contact-details2">
            <h3 className="contact2">Contact</h3>
            <div className="contact-info1">
              <div className="contact-links">
                <div className="link-types">
                  <img
                    className="call-icon1"
                    loading="lazy"
                    alt=""
                    src="/img/Call.png"
                  />
                  <div className="link-details">(0232) 8990 5556, 890 5557</div>
                </div>
                <div className="link-types1">
                  <img
                    className="message-icon1"
                    loading="lazy"
                    alt=""
                    src="/img/Message.png"
                  />
                  <div className="mentalkugmailcom1">mentalku@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="contact-inner-child"
          loading="lazy"
          alt=""
          src="/vector-4-1.svg"
        />
        <div className="footer1">
          <div className="copyright">
            <img className="vector-icon2" alt="" src="/img/Vector.png" />
          </div>
          <div className="copyright-2024-mentalkuid1">
            copyright 2024 @mentalku.id
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
