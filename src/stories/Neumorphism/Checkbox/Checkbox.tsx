// External deps
import React from "react";
import { BsCheck2 } from "react-icons/bs";

// Internal deps
import "./Checkbox.scss";

interface CheckboxProps {
  isChecked: boolean;
  handleChange: React.ChangeEventHandler;
  size: "small" | "medium" | "large";
  label: string;
  className: string;
}
const Checkbox = ({
  isChecked = false,
  handleChange,
  size = "small",
  label = "Checkbox",
  className = "",
}: CheckboxProps) => {
  return (
    <div className={`checkbox ${className}`}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className={`${isChecked ? "checked" : ""} ${size}`}
        />
        {isChecked && <BsCheck2 className={`checked icon ${size}`} />}
        <span className={`${size}`}>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
