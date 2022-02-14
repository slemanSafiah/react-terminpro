import { Button } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Google,
  Apple
} from "@mui/icons-material";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-sec1">
          <div item className="footer-sec1-title">
            TerminPro
          </div>
          <div item className="footer-sec1-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            feugiat porttitor facilisi.
          </div>
          <div item className="footer-sec1-icons">
            <Facebook className="icon" />
            <Twitter className="icon" />
            <Instagram className="icon" />
            <YouTube className="icon" />
          </div>
        </div>

        <div className="footer-sec2">
          <div className="sentence-group">
            <div className="sentence-item">About Terminpro</div>
            <div className="sentence-item">Careers at Terminpro</div>
            <div className="sentence-item">Customer Support</div>
            <div className="sentence-item">Blog</div>
          </div>
          <div className="sentence-group">
            <div className="sentence-item">For business</div>
            <div className="sentence-item">For Partners</div>
            <div className="sentence-item">Pricing</div>
            <div className="sentence-item">Support For Partners</div>
          </div>
          <div className="sentence-group">
            <div>
              <div className="sentence-item">Legal</div>
              <div className="sentence-item">Booking terms</div>
              <div className="sentence-item">Privacy policy</div>
              <div className="sentence-item">Website terms</div>
            </div>
          </div>
        </div>

        <div className="footer-sec3">
          <Button variant="contained" color="secondary" className="btn1-google">
            Download <Google className="icon" />
          </Button>
          <Button variant="outlined" color="secondary" className="btn2-apple">
            Download <Apple className="icon" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
