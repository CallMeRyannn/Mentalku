import "./FrameComponent3.css";

const FrameComponent3 = ({ maskGroup, bipolar }) => {
  return (
    <div className="mask-group-parent">
      <img className="mask-group-icon" loading="lazy" alt="" src={maskGroup} />
      <div className="other-diseases-container">
        <div className="other-disease-pairs">
          <b className="bipolar">{bipolar}</b>
          <i className="see-more">See more</i>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
