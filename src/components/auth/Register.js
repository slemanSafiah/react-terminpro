import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "./images/login.jpg";
import { Stepper, Button, ButtonGroup, Step, StepLabel } from "@mui/material";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

import "./style.css";

function Register() {
  const steps = [
    "Step 1 : provide your email ",
    "Step 2 : provide your information ",
    "Step 3 : type your password"
  ];
  const hist = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) hist("/");
    else {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = () => {
    hist("/login");
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0: {
        return <Step1 />;
      }
      case 1: {
        return <Step2 />;
      }
      case 2: {
        return <Step3 />;
      }
      case 3: {
        return <Step4 />;
      }
      default:
        break;
    }
  };

  return (
    <div className="register-page">
      <img src={background} className="background" alt="" background />
      <div className="form-stepper">
        <div className="form-stepper-background" />
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {renderStep()}
        <div className="button-group">
          <ButtonGroup variant="outlined">
            {activeStep !== 3 ? (
              <>
                <Button onClick={handleBack}>Back</Button>
                <Button onClick={handleNext}>Next</Button>
              </>
            ) : (
              <Button onClick={handleSubmit}>Finish</Button>
            )}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default Register;
