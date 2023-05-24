// External deps

// Internal deps
import "./Chip.scss";

interface ChipProps {
  label: string;
  onClick?: () => void | null;
  onDelete?: () => void | null;
  size: "small" | "medium" | "large";
  hover: boolean;
  className: string;
}

const Chip = ({
  label,
  size,
  onClick,
  hover = false,
  className,
}: ChipProps) => {
  return (
    <div
      onClick={onClick}
      className={`chip ${size} ${onClick ? "clickeable" : ""} ${
        hover ? "hover" : ""
      } ${className}`}
    >
      <span>{label}</span>
    </div>
  );
};

export default Chip;
