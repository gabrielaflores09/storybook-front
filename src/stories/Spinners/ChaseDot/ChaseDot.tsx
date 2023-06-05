// Internal deps
import "./ChaseDot.scss";

interface ChaseDotProps {
  text: string;
}
const ChaseDot = ({ text }: ChaseDotProps) => {
  return (
    <div className="chase-spinner">
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      {text}
    </div>
  );
};

export default ChaseDot;
