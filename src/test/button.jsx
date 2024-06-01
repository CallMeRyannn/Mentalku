

import PropTypes from "prop-types";
import React from "react";
import "./buttonstyle.css";

export const Button = ({ className, divClassName, text = "See detail" }) => {
  return (
    <button className={`button ${className}`}>
      <div className={`see-detail ${divClassName}`}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};
