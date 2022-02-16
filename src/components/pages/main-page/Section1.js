import background from "./images/back-1.png";
import "../../../App.css";

function Section1() {
  return (
    <div>
      <div style={{ width: "100%", height: "100vh" }}>
        <img className="background-image" src={background} alt="background" />
      </div>
      <div className="background-image background-blur"></div>
      <p className="background-header">TerminPro</p>
      <p className="background-header-2">Book with our services . . .</p>
    </div>
  );
}

export default Section1;
