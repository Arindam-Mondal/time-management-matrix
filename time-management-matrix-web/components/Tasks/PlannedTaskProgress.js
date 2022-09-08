import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import UrgentNoImpNo from "../../public/urgent-no-imp-no.svg";
import UrgentNoImpYes from "../../public/urgent-no-imp-yes.svg";
import UrgentYesImpNo from "../../public/urgent-yes-imp-no.svg";
import UrgentYesImpYes from "../../public/urgent-yes-imp-yes.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "cursive",
      textTransform: "none",
    },
  },
});

function PlannedTaskProgress(props) {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        sx={{
          marginBottom: "0.5em",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "flex-end",
          }}
        >
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
            <Typography>20%</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "flex-start",
          }}
        >
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
            <Typography>40%</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "flex-end",
          }}
        >
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
            <Typography>80%</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "flex-start",
          }}
        >
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
            <Typography>50%</Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default PlannedTaskProgress;
