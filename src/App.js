import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import NavBar from "./components/NavBar";
import { SectionsContainer, Section } from "react-fullpage";
import "./App.css";

function App() {
  let options = {
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: "0px",
    sectionPaddingBottom: "0px",
    arrowNavigation: true,
  };

  return (
    <div className="App">
      <SectionsContainer {...options}>
        <NavBar />
        <Section>
          <Section1 />
        </Section>
        <Section>
          <Section2 />
        </Section>
        {/* <Section>
          <Section3 />
        </Section> */}
      </SectionsContainer>
    </div>
  );
}

export default App;
