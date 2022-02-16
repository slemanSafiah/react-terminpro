import { forwardRef, useEffect, useState } from "react";
import { useAuth } from "../../../context/userContext";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../../../App.css";

function MainPage() {
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);

  const { first, setFirst } = useAuth();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (!first) {
      setOpen(true);
      setFirst(true);
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Section1 />
      <Section3 />
      <Section2 />
      <Footer />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          welcome to our website
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MainPage;
