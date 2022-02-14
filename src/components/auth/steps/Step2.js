import { FormControl, Box, InputLabel, Input } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";

import "./style-step.css";

function Step2() {
  return (
    <div className="step1">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl className="input-step">
          <InputLabel htmlFor="fn">First Name</InputLabel>
          <Input
            required
            id="fn"
            type="text"
            // value={values.email}
            // onChange={handleChange("email")}
          />
        </FormControl>
        <FormControl className="input-step">
          <InputLabel htmlFor="ln">Last Name</InputLabel>
          <Input
            required
            id="ln"
            type="text"
            // value={values.email}
            // onChange={handleChange("email")}
          />
        </FormControl>

        <FormControl className="input-step">
          <InputLabel htmlFor="address">Address</InputLabel>
          <Input
            required
            id="address"
            type="text"
            // value={values.email}
            // onChange={handleChange("email")}
          />
        </FormControl>
        <MuiPhoneNumber
          style={{
            width: "385px",
            marginLeft: "50px",
            marginTop: "20px",
            padding: "20px"
          }}
          autoFormat={false}
          defaultCountry={"us"}
          // onChange={handleOnChange}
        />
      </Box>
    </div>
  );
}

export default Step2;
