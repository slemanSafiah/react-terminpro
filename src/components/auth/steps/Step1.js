import { FormControl, InputLabel, Input } from "@mui/material";
import "./style-step.css";

function Step1() {
  return (
    <div className="step1">
      <FormControl className="input-step">
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input
          required
          id="email"
          type="email"
          // value={values.email}
          // onChange={handleChange("email")}
          aria-describedby="email-helper"
        />
      </FormControl>
    </div>
  );
}

export default Step1;
