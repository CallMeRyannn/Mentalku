import "./FrameComponent.css";

const FrameComponent = ({ maskGroup, bipolar }) => {
  return (
    <div className="other-diseases-list">
      <img className="mask-group-icon" loading="lazy" alt="" src={maskGroup} />
      <div className="bipolar-container">
        <div className="bipolar-info">
          <b className="bipolar">{bipolar}</b>
          <i className="see-more">See more</i>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
