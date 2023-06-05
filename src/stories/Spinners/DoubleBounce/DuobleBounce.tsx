// Internal deps
import "./DoubleBounce.scss";

interface DoubleBounceProps {
  text: string;
}
const DoubleBounce = ({ text }: DoubleBounceProps) => {
  return (
    <div className="double-bounce">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
      {text}
    </div>
  );
};

export default DoubleBounce;
