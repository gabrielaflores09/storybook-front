// Internal deps
import "./RotatePlane.scss";

interface RotatePlaneProps {
  text: string;
}
const RotatePlane = ({ text }: RotatePlaneProps) => {
  return (
    <div className="rotate-spinner">
      <div className="spinner"></div>
      {text}
    </div>
  );
};

export default RotatePlane;
