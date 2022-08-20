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
import { createTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E1E8FF",
  //   color: "#0070FF",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(0.5),
  //   color: theme.palette.text.secondary,
}));

const theme = createTheme();

function Task(props) {
  return (
    // <Box sx={{ width: "100%", padding: "2em 5em" }}>

    <Item>
      <Grid container>
        <Grid item xs={12}>
          {props.startTime} - {props.endTime}
        </Grid>
        {props.isComplete == "true" ? (
          <Grid item xs={8}>
            <Grid item xs={12}>
              <Typography>{props.plannedTask}</Typography>
            </Grid>

            <Grid item xs={12}>
              {props.isUrgentPlanned == "true" ? (
                <Chip label="Urgent" />
              ) : (
                <></>
              )}
              {props.isImportantPlanned == "true" ? (
                <Chip label="Important" />
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={8}>
            <Grid item xs={12}>
              <Typography>{props.actualTask}</Typography>
            </Grid>
            <Grid item xs={12}>
              {props.isUrgentActual == "true" ? <Chip label="Urgent" /> : <></>}
              {props.isImportantActual == "true" ? (
                <Chip label="Important" />
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        )}

        <Grid
          item
          xs={1}
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} />
          </FormGroup>
        </Grid>
      </Grid>
    </Item>
  );
}

export default Task;
