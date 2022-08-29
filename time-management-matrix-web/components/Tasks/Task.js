import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import SunriseImage from "../../public/sunrise.png";
import NoonImage from "../../public/noon.png";
import SunsetImage from "../../public/sunset.png";
import NightImage from "../../public/night.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(0.5),
  minHeight: "85px",
}));

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "cursive",
      textTransform: "none",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          marginRight: "2px",
        },
      },
      variants: [
        {
          props: { variant: "urgent" },
          style: {
            backgroundColor: "#d50000",
            color: "#eceff1",
          },
        },
        {
          props: { variant: "important" },
          style: {
            backgroundColor: "#e65100",
            color: "#eceff1",
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "taskheader" },
          style: {
            fontWeight: "bold",
            widt: "100%",
          },
        },
      ],
    },
  },
});

function cardBackground(startTime) {
  //first converting the time to lower case
  const matches = startTime.toLowerCase().match(/(\d{1,2}):(\d{2}) ([ap]m)/);
  const time =
    parseInt(matches[1]) +
    (matches[3] == "pm" ? 12 : 0) +
    ":" +
    matches[2] +
    ":00";
  const hour = time.split(":")[0];
  if (hour <= 7) {
    return SunriseImage;
  } else if (hour > 7 && hour <= 16) {
    return NoonImage;
  } else if (hour > 16 && hour <= 18) {
    return SunsetImage;
  } else {
    return NightImage;
  }
}
function Task(props) {
  const [isComplete, setIsComplete] = useState(props.isComplete);
  return (
    // <Box sx={{ width: "100%", padding: "2em 5em" }}>
    <ThemeProvider theme={theme}>
      <Item
        sx={{ backgroundImage: `url(${cardBackground(props.startTime).src})` }}
      >
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="taskheader">
              {props.startTime} - {props.endTime}
            </Typography>
            <Checkbox
              checked={isComplete}
              sx={{ paddingTop: "0", paddingBottom: "0" }}
              onChange={(event) => {
                props.onTaskComplete({
                  id: props.taskId,
                  isComplete: event.target.checked,
                });
                setIsComplete(event.target.checked);
              }}
            />
          </Grid>
          {props.status === "ENTERED" || props.status === "DONE" ? (
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    minHeight: "30px",
                  }}
                >
                  {props.plannedTask}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {props.isUrgentPlanned ? (
                  <Chip size="small" label="Urgent" variant="urgent" />
                ) : (
                  <></>
                )}

                {props.isImportantPlanned ? (
                  <Chip size="small" label="Important" variant="important" />
                ) : (
                  <></>
                )}
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography>{props.actualTask}</Typography>
              </Grid>
              <Grid item xs={12}>
                {props.isUrgentActual ? (
                  <Chip size="small" label="Urgent" variant="urgent" />
                ) : (
                  <></>
                )}
                {props.isImportantActual ? (
                  <Chip size="small" label="Important" variant="important" />
                ) : (
                  <></>
                )}
              </Grid>
            </Grid>
          )}
        </Grid>
      </Item>
    </ThemeProvider>
  );
}

export default Task;
