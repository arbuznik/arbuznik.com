import React from "react";
import sun from "../images/sun.png";
import moon from "../images/moon.png";
import "./Toggle.css";

export const Toggle = ({ checked, onClick }) => {
  return (
    <div
      className={"toggle" + (checked ? " toggle--checked" : "")}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      aria-checked={checked}
      role="switch"
    >
      <div className="toggle-track">
        <div className="toggle-track-check">
          <img
            src={moon}
            role="presentation"
            alt="moon"
            width="16"
            height="16"
          />
        </div>
        <div className="toggle-track-x">
          <img src={sun} role="presentation" alt="sun" width="16" height="16" />
        </div>
      </div>
      <div className="toggle-thumb" />
      <input
        className="toggle-screenreader-only"
        type="checkbox"
        aria-label="Switch between Dark and Light mode"
      />
    </div>
  );
};
