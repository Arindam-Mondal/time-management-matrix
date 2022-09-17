import Box from "@mui/material/Box";
import { Grid, Typography, Chip } from "@mui/material";
// import UrgentNoImpNo from "../../public/urgent-no-imp-no.svg";
// import UrgentNoImpYes from "../../public/urgent-no-imp-yes.svg";
// import UrgentYesImpNo from "../../public/urgent-yes-imp-no.svg";
// import UrgentYesImpYes from "../../public/urgent-yes-imp-yes.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "cursive",
      textTransform: "none",
    },
  },
});

function PlannedTaskProgress(props) {
  const imp = "Imp";
  const ugt = "Ugt";

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
          xs={12}
          display="flex"
          alignContent="center"
          alignItems="center"
          sx={{
            marginBottom: "0.25em",
          }}
        >
          <Box
            sx={{
              mr: 1,
            }}
          >
            <Chip
              label={imp}
              variant={props.progress.important ? "filled" : "outlined"}
            />
          </Box>
          <Box
            sx={{
              mr: 1,
            }}
          >
            <Chip
              label={ugt}
              variant={props.progress.urgent ? "filled" : "outlined"}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              mr: 1,
            }}
          >
            <LinearProgress
              variant="determinate"
              value={props.progress.percentageCompletion}
            />
          </Box>
          <Box>
            <Typography>{props.progress.percentageCompletion}%</Typography>
          </Box>
        </Grid>
        {/* })} */}
        {/* <Grid
          item
          xs={12}
          display="flex"
          alignContent="center"
          alignItems="center"
          sx={{
            marginBottom: "0.25em",
          }}
        >
          <Box
            sx={{
              mr: 1,
            }}
          >
            <Chip label={imp} variant="outlined" />
          </Box>
          <Box
            sx={{
              mr: 1,
            }}
          >
            <Chip label={ugt} variant="outlined" />
          </Box>
          <Box
            sx={{
              width: "100%",
              mr: 1,
            }}
          >
            <LinearProgress variant="determinate" value={urgentNoImpNo} />
          </Box>
          <Box>
            <Typography>{urgentNoImpNo}%</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          alignContent="center"
          alignItems="center"
          sx={{
            marginBottom: "0.25em",
          }}
        >
          <Box
            sx={{
              mr: 1,
            }}
          >
            <Chip label={imp} variant="outlined" />
          </Box>
          <Box
            sx={{
              mr: 1,
            }}
          >
            <Chip label={ugt} variant="outlined" />
          </Box>
          <Box
            sx={{
              width: "100%",
              mr: 1,
            }}
          >
            <LinearProgress variant="determinate" value={urgentNoImpYes} />
          </Box>
          <Box>
            <Typography>{urgentNoImpYes}%</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          alignContent="center"
          alignItems="center"
          sx={{
            marginBottom: "0.25em",
          }}
        >
          <Box
            sx={{
              mr: 1,
            }}
          >
            <Chip size="small" label={imp} variant="outlined" />
          </Box>
          <Box
            sx={{
              mr: 1,
            }}
          >
            <Chip label={ugt} variant="outlined" />
          </Box>
          <Box
            sx={{
              width: "100%",
              mr: 1,
            }}
          >
            <LinearProgress variant="determinate" value={urgentYesImpNo} />
          </Box>
          <Box>
            <Typography>{urgentYesImpNo}%</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          alignContent="center"
          alignItems="center"
          sx={{
            marginBottom: "0.25em",
          }}
        >
          <Box
            sx={{
              mr: 1,
            }}
          >
            <Chip label={imp} variant="outlined" />
          </Box>
          <Box
            sx={{
              mr: 1,
            }}
          >
            <Chip label={ugt} variant="outlined" />
          </Box>
          <Box
            sx={{
              width: "100%",
              mr: 1,
            }}
          >
            <LinearProgress variant="determinate" value={urgentYesImpYes} />
          </Box>
          <Typography>{urgentYesImpYes}%</Typography>
        </Grid> */}
      </Grid>
    </ThemeProvider>
  );
}

export default PlannedTaskProgress;
