import { Grid } from "@mui/material";

function Footer() {
  return (
    <div className="footer-container">
      <Grid container justifyContent="space-evenly">
        <Grid items xs={3}>
          <Grid
            container
            item
            direction="column"
            className="footer-sec1"
            alignItems="flex-start"
            justifyContent="space-evenly"
          >
            <Grid item className="footer-sec1-title">
              TerminPro
            </Grid>
            <Grid item className="footer-sec1-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              feugiat porttitor facilisi.
            </Grid>
            <Grid item>icons</Grid>
          </Grid>
        </Grid>
        <Grid items xs={6}>
          <div className="footer-sec1">asd</div>
        </Grid>
        <Grid items xs={3}>
          <div className="footer-sec1">as</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
