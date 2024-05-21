import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  konsultasiOnline,
  shortDivider,
  line6,
  propWidth,
  propAlignSelf,
  propPadding,
  propWidth1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propWidth, propAlignSelf, propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="frame-wrapper" style={frameDivStyle}>
      <div className="konsultasi-online-parent" style={frameDiv1Style}>
        <h2 className="konsultasi-online3">{konsultasiOnline}</h2>
        <div className="short-divider-wrapper">
          <img
            className="short-divider-icon"
            loading="lazy"
            alt=""
            src={shortDivider}
          />
        </div>
        <div className="long-divider">
          <img
            className="long-divider-child"
            loading="lazy"
            alt=""
            src={line6}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
