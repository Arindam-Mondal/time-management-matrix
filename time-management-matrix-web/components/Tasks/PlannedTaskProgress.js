import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import UrgentNoImpNo from "../../public/urgent-no-imp-no.svg";
import UrgentNoImpYes from "../../public/urgent-no-imp-yes.svg";
import UrgentYesImpNo from "../../public/urgent-yes-imp-no.svg";
import UrgentYesImpYes from "../../public/urgent-yes-imp-yes.svg";

function PlannedTaskProgress(props) {
  return (
    <Grid container justifyContent="center" sx={{ marginBottom: "0.5em" }}>
      <Grid item xs={6}>
        <Box
          sx={{
            backgroundImage: `url(${UrgentYesImpNo.src})`,
            height: "70px",
            width: "200px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          20%
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <Box
            sx={{
              backgroundImage: `url(${UrgentYesImpYes.src})`,
              height: "70px",
              width: "200px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            40%
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <Box
            sx={{
              backgroundImage: `url(${UrgentNoImpNo.src})`,
              height: "70px",
              width: "200px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            80%
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <Box
            sx={{
              backgroundImage: `url(${UrgentNoImpYes.src})`,
              height: "70px",
              width: "200px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            50%
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default PlannedTaskProgress;
