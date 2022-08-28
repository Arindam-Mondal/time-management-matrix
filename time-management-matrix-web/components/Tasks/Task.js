import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Image from "../../public/task-curve.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e3f2fd",
  // backgroundImage: "linear-gradient(#bbdefb, white)",
  backgroundImage: `url(${Image.src})`,
  backgroundSize: "cover",
  //   color: "#0070FF",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(0.5),
  //   color: theme.palette.text.secondary,
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

function Task(props) {
  const [isComplete, setIsComplete] = useState(props.isComplete);
  return (
    // <Box sx={{ width: "100%", padding: "2em 5em" }}>
    <ThemeProvider theme={theme}>
      <Item>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="taskheader">
              {props.startTime} - {props.endTime}
            </Typography>
          </Grid>
          <Grid item xs={1}>
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
