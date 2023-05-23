// External deps
import React from "react";

// Internal deps
import "./Switch.scss";

interface SwitchProps {
  isChecked: boolean;
  handleChange: React.ChangeEventHandler;
  size: "small" | "medium" | "large";
  className: string;
}

const Switch = ({
  isChecked = false,
  handleChange,
  size = "small",
  className = "",
}: SwitchProps) => {
  return (
    <div className={`switch ${className}`}>
      <input
        checked={isChecked}
        onChange={handleChange}
        id="switch-comp"
        className="switch-checkbox"
        type="checkbox"
      />
      <label
        className={`switch-label ${size} ${isChecked ? "checked" : ""}`}
        htmlFor="switch-comp"
      >
        <span
          className={`switch-button ${size} ${isChecked ? "checked" : ""}`}
        />
      </label>
    </div>
  );
};

export default Switch;
