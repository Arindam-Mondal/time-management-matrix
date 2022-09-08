import { useEffect, useState } from "react";
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
  const [urgentNoImpNo, setUrgentNoImpNo] = useState(20);
  const [urgentNoImpYes, setUrgentNoImpYes] = useState(50);
  const [urgentYesImpNo, setUrgentYesImpNo] = useState(40);
  const [urgentYesImpYes, setUrgentYesImpYes] = useState(70);
  const imp = "Imp";
  const ugt = "Ugt";

  useEffect(() => {
    console.log(props.tasks);
    const defaultProgress = (0.0).toFixed(2); //Creating a deep copy of the object
    const tasksCopy = props.tasks
      ? JSON.parse(JSON.stringify(props.tasks))
      : { tasks: [] };
    let countUNIN = 0;
    let countUNIY = 0;
    let countUYIN = 0;
    let countUYIY = 0;

    let countUNINDone = 0;
    let countUNIYDone = 0;
    let countUYINDone = 0;
    let countUYIYDone = 0;

    tasksCopy.tasks.forEach((task) => {
      if (task.isImportantPlanned && task.isUrgentPlanned) {
        countUYIY++;
        countUYIYDone =
          task.status === "DONE" ? countUYIYDone + 1 : countUYIYDone;
      } else if (task.isImportantPlanned) {
        countUNIY++;
        countUNIYDone =
          task.status === "DONE" ? countUNIYDone + 1 : countUNIYDone;
      } else if (task.isUrgentPlanned) {
        countUYIN++;
        countUYINDone =
          task.status === "DONE" ? countUYINDone + 1 : countUYINDone;
      } else {
        countUNIN++;
        countUNINDone =
          task.status === "DONE" ? countUNINDone + 1 : countUNINDone;
      }
    });

    console.table(countUYIY, countUYIYDone);
    console.table(countUYIN, countUYINDone);
    console.table(countUNIY, countUNIYDone);
    console.table(countUNIN, countUNINDone);

    const urgYesImpYes =
      countUYIY == 0
        ? defaultProgress
        : ((countUYIYDone / countUYIY) * 100).toFixed(2);
    const urgYesImpNo =
      countUYIN == 0
        ? defaultProgress
        : ((countUYINDone / countUYIN) * 100).toFixed(2);
    const urgNoImpYes =
      countUNIY == 0
        ? defaultProgress
        : ((countUNIYDone / countUNIY) * 100).toFixed(2);
    const urgNoImpNo =
      countUNIN == 0
        ? defaultProgress
        : ((countUNINDone / countUNIN) * 100).toFixed(2);

    setUrgentYesImpYes(urgYesImpYes);
    setUrgentYesImpNo(urgYesImpNo);
    setUrgentNoImpYes(urgNoImpYes);
    setUrgentNoImpNo(urgNoImpNo);

    console.log(urgYesImpYes);
  });

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
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default PlannedTaskProgress;
