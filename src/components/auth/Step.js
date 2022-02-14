import { Step as Stp, StepLabel } from "@mui/material";

function Step({ index, label }) {
  return (
    <Stp key={label}>
      <StepLabel>{label}</StepLabel>
    </Stp>
  );
}

export default Step;
