import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "./images/login.jpg";
import {
  Box,
  Button,
  InputLabel,
  Input,
  FormHelperText,
  FormControl,
  InputAdornment,
  IconButton
} from "@mui/material";
import { Visibility, VisibilityOff, ArrowBack } from "@mui/icons-material";
import "./style.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false
  });
  const hist = useNavigate();

  const handleChange = (props) => (event) => {
    setValues({
      ...values,
      [props]: event.target.value
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    console.log(values.email, values.password);
    setValues({
      email: "",
      password: ""
    });
    //add login logic
    hist("/register");
  };

  const handleBack = () => {
    hist("/");
  };

  return (
    <div className="login-page">
      <img src={background} className="background" alt="background" />
      <div className="background-dark"></div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "400px" }
        }}
        // autoComplete="off"
      >
        <div className="form">
          <div className="form-background"></div>
          <div className="title">
            <ArrowBack className="back" onClick={handleBack} />
            Login
          </div>
          <div className="form-input">
            <FormControl className="input">
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input
                required
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                aria-describedby="email-helper"
              />
              <FormHelperText id="email-helper">
                We'll never share your email.
              </FormHelperText>
            </FormControl>

            <FormControl className="input" variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                required
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="login-btn">
            <Button variant="contained" onClick={handleSubmit}>
              {/* add login logic */}
              submit
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Login;
