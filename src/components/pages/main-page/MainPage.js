import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../../../App.css";

function MainPage() {
  return (
    <div className="App">
      <NavBar />
      <Section1 />
      <Section3 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default MainPage;
