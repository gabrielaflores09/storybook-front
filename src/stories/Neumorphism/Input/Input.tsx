import { ChangeEventHandler } from "react";
import "./Input.scss";

interface InputProps {
  placeholder: string;
  label: string;
  className: string;
  value: number | string;
  size: "small" | "medium" | "large";
  onChange: ChangeEventHandler;
  widthButton: string;
  hoverEffect: boolean;
  type: "text" | "number";
  min?: number;
  max?: number;
  maxLength?: number;
}

const Input = ({
  className,
  value,
  size,
  onChange,
  label,
  widthButton,
  hoverEffect,
  placeholder,
  type,
  min,
  max,
  maxLength,
}: InputProps) => {
  return (
    <div className={`input ${className} ${size} ${hoverEffect ? "hover" : ""}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        className={`${size}`}
        onChange={onChange}
        style={{
          width: widthButton || "auto",
        }}
        placeholder={placeholder}
        min={min}
        max={max}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Input;
