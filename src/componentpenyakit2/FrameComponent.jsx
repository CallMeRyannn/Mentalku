import "./FrameComponent.css";

const FrameComponent = ({ maskGroup, bipolar }) => {
  return (
    <div className="diseases-content">
      <img className="mask-group-icon" loading="lazy" alt="" src={maskGroup} />
      <div className="bipolar-parent">
        <div className="bipolar-content">
          <b className="bipolar">{bipolar}</b>
          <i className="see-more">See more</i>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
