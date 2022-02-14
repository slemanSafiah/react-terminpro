import { FormControl, Box, InputLabel, Input } from "@mui/material";
import "./style-step.css";

function Step3() {
  return (
    <div className="step3">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl className="input-password">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            required
            id="password"
            type="password"
            // value={values.email}
            // onChange={handleChange("email")}
          />
        </FormControl>
        <FormControl className="input-password">
          <InputLabel htmlFor="confirmation">Confirmation Password</InputLabel>
          <Input
            required
            id="confirmation"
            type="password"
            // value={values.email}
            // onChange={handleChange("email")}
          />
        </FormControl>
      </Box>
    </div>
  );
}

export default Step3;
