import background from "./images/back-1.png";
import "../App.css";

function Section1() {
  return (
    <div>
      <img className="background-image" src={background} alt="background" />
      <div className="background-image background-blur">
        <p className="background-header">TerminPro</p>
        <p className="background-header-2">Book with our services . . .</p>
      </div>
    </div>
  );
}

export default Section1;
