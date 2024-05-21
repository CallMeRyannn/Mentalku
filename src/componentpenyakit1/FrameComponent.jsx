import "./FrameComponent.css";

const FrameComponent = ({ maskGroup, kecemasanUmum }) => {
  return (
    <div className="disease-example-pairs">
      <img className="mask-group-icon" loading="lazy" alt="" src={maskGroup} />
      <div className="example-details">
        <div className="example-name-pairs">
          <b className="kecemasan-umum">{kecemasanUmum}</b>
          <i className="see-more">See more</i>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
