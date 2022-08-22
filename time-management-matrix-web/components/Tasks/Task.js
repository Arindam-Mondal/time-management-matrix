import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AlarmIcon from "@mui/icons-material/Alarm";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Image from "../../public/task-card.png";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: "#1a237e",
  backgroundImage: "linear-gradient(#bbdefb, white)",
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
  return (
    // <Box sx={{ width: "100%", padding: "2em 5em" }}>
    <ThemeProvider theme={theme}>
      <Item>
        <Grid container>
          <Typography variant="taskheader">
            <Grid item xs={12}>
              {props.startTime} - {props.endTime}
            </Grid>
          </Typography>
          {props.isComplete == "true" ? (
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    minHeight: "50px",
                  }}
                >
                  {props.plannedTask}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                {props.isUrgentPlanned == "true" ? (
                  <Chip size="small" label="Urgent" variant="urgent" />
                ) : (
                  <></>
                )}
                {props.isImportantPlanned == "true" ? (
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
                {props.isUrgentActual == "true" ? (
                  <Chip size="small" label="Urgent" variant="urgent" />
                ) : (
                  <></>
                )}
                {props.isImportantActual == "true" ? (
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
