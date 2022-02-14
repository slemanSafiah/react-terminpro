import { useState } from "react";
// import Step from "./Step";
import { Stepper, Button, Typography, Step, StepLabel } from "@mui/material";

import "./style.css";

function Register() {
  const steps = [
    "Step 1 : provide your email ",
    "Step 2 : provide your information ",
    "Step 3 : type your password"
  ];

  const [acticeStep, setActiveStep] = useState(2);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="register-page">
      <div className="form-stepper">
        <Stepper activeStep={acticeStep} alternativeLabel>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
    </div>
  );
}

export default Register;
