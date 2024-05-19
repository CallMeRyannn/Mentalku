import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  rectangle167,
  bipolar,
  propPadding,
  propMinWidth,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const bipolarStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propMinWidth, propWidth]);

  return (
    <div className="rectangle-parent" style={frameDivStyle}>
      <img className="frame-item" loading="lazy" alt="" src={rectangle167} />
      <div className="triple-disorder">
        <h3 className="bipolar" style={bipolarStyle}>
          {bipolar}
        </h3>
      </div>
      <div className="triple-button">
        <button className="triple-button-container">
          <div className="triple-button-container-child" />
          <b className="baca-disini">BACA DISINI</b>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
