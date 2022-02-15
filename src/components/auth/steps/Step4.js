import background from "../images/register.png";
import "./style-step.css";

function Step4() {
  return (
    <div className="step1">
      <div>
        <img
          src={background}
          alt="register complete"
          className="register-background"
        />
        <div className="step4-title">registeration complete</div>
      </div>
    </div>
  );
}

export default Step4;
