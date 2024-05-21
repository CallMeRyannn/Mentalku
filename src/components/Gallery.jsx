import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-content">
        <div className="gallery-header">
          <div className="gallery-title">
            <b className="galeri">Galeri</b>
            <h1 className="kesehatan-mental-di">
              Kesehatan Mental di seluruh dunia
            </h1>
          </div>
        </div>
        <div className="gallery-images">
          <div className="image-grid">
            <img
              className="mask-group-icon"
              loading="lazy"
              alt=""
              src="/img/Mask group.png"
            />
            <img
              className="mask-group-icon1"
              alt=""
              src="/img/Mask group (1).png"
            />
          </div>
          <div className="image-row">
            <div className="gallery-photo-parent">
              <img
                className="gallery-photo-icon"
                loading="lazy"
                alt=""
                src="/img/Rectangle 39.png"
              />
              <img
                className="mask-group-icon2"
                alt=""
                src="/img/Mask group (3).png"
              />
            </div>
            <div className="mask-group-parent">
              <img
                className="mask-group-icon3"
                alt=""
                src="/img/Mask group (2).png"
              />
              <div className="mask-group-group">
                <img
                  className="mask-group-icon4"
                  alt=""
                  src="/img/Mask group (4).png"
                />
                <div className="mask-group-container">
                  <img
                    className="mask-group-icon5"
                    alt=""
                    src="/img/mm 8.png"
                  />
                  <img
                    className="mask-group-icon6"
                    alt=""
                    src="/img/Mask group (5).png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
