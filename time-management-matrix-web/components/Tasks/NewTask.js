import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import { buttonOrageOutlineTheme } from "../../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { addNewTaskTime } from "../../theme/theme";

function NewTask(props) {
  const [open, setOpen] = useState(props.open);
  const [isTaskError, setIsTaskError] = useState(false);
  const [isStartTimeError, setIsStartTimeError] = useState(false);
  const [isEndTimeError, setIsEndTimeError] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [plannedUrgent, setPlannedUrgent] = useState(false);
  const [plannedImportant, setPlannedImportant] = useState(false);
  const [plannedComplete, setPlannedComplete] = useState(false);
  const [actualImportant, setActualImportant] = useState(false);
  const [actualUrgent, setActualUrgent] = useState(false);

  const startTimeInputRef = useRef();
  const endTimeInputRef = useRef();
  const plannedTaskInputRef = useRef();
  const isUrgentPlannedRef = useRef();
  const isImportantPlannedRef = useRef();
  const isCompleteInputRef = useRef();
  const actualTaskInputRef = useRef();
  const isUrgentActualRef = useRef();
  const isImportantActualRef = useRef();

  const PLANNED_URGENT = "PLANNED_URGENT";
  const PLANNED_IMPORTANT = "PLANNED_IMPORTANT";
  const PLANNED_COMPLETE = "PLANNED_COMPLETE";
  const ACTUAL_URGENT = "PLANNED_URGENT";
  const ACTUAL_IMPORTANT = "PLANNED_IMPORTANT";

  const handleClickOpen = () => {
    resetError();
    setOpen(true);
    //Reset the values:
    setStartTime(null);
    setEndTime(null);
    setPlannedUrgent(null);
    setPlannedImportant(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckEventChange = (event, updateCheckhandler) => {
    updateCheckhandler(event.target.checked);
  };

  /**
   * Add a new task.
   * Validates the data and if valid data is enetered - data is added to the database.
   * @returns
   */
  const handleAdd = () => {
    //Resetting the error to false
    //Once which are entered correctly should not show as error
    resetError();
    const enteredStartTime = startTimeInputRef.current.value;
    const enteredEndTime = endTimeInputRef.current.value;
    const eneteredPlannedTask = plannedTaskInputRef.current.value;
    const enteredIsUrgentPlanned = plannedUrgent;
    const enteredIsImportantPlanned = plannedImportant;
    if (!validateInput(eneteredPlannedTask, enteredStartTime, enteredEndTime)) {
      return;
    }

    // const enteredIsComplete = isCompleteInputRef.current.value;
    // const enteredActualTask = actualTaskInputRef.current.value;
    // const enteredIsUrgentActual = isUrgentActualRef.current.value;
    // const enteredIsImportantActual = isImportantActualRef.current.value;

    // const taskData = {
    //   startTime: enteredStartTime,
    //   endTime: enteredEndTime,
    //   plannedTask: eneteredPlannedTask,
    //   isUrgentPlanned: enteredIsUrgentPlanned,
    //   isImportantPlanned: enteredIsImportantPlanned,
    //   isComplete: enteredIsComplete,
    //   actualTask: enteredActualTask,
    //   isUrgentActual: enteredIsUrgentActual,
    //   isImportantActual: enteredIsImportantActual,
    // };

    const taskData = {
      startTime: enteredStartTime,
      endTime: enteredEndTime,
      plannedTask: eneteredPlannedTask,
      isUrgentPlanned: enteredIsUrgentPlanned,
      isImportantPlanned: enteredIsImportantPlanned,
      status: "ENTERED",
      isComplete: false,
      actualTask: null,
      isUrgentActual: false,
      isImportantActual: false,
    };

    props.onAddTask(taskData);
    setOpen(false);
  };

  /**
   * Reset the Field Errors as true
   */
  function resetError() {
    setIsTaskError(false);
    setIsStartTimeError(false);
    setIsEndTimeError(false);
  }

  /**
   *
   * @param {*} eneteredPlannedTask
   * @param {*} enteredStartTime
   * @param {*} enteredEndTime
   * @returns if the enter fields are valid
   */
  function validateInput(
    eneteredPlannedTask,
    enteredStartTime,
    enteredEndTime
  ) {
    let valid = true;
    if (eneteredPlannedTask === "") {
      setIsTaskError(true);
      valid = false;
    }
    if (enteredStartTime === "") {
      setIsStartTimeError(true);
      valid = false;
    }
    if (enteredEndTime === "") {
      setIsEndTimeError(true);
      valid = false;
    }
    return valid;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box sx={{ width: "100%", paddingTop: "2em" }}>
        <Typography align="right">
          <ThemeProvider theme={buttonOrageOutlineTheme}>
            <Button variant="outlined" onClick={handleClickOpen}>
              Add New
            </Button>
          </ThemeProvider>
        </Typography>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            backgroundColor: "#ffa000",
            padding: "0.5em 1em",
          }}
        >
          Plan a new Task
        </DialogTitle>
        <DialogContent style={{ paddingTop: "1em" }}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TimePicker
                label="Start Time"
                value={startTime}
                onChange={(newValue) => {
                  setStartTime(newValue);
                }}
                inputRef={startTimeInputRef}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    error={isStartTimeError === true}
                    // sx={{ padding: "0em 0.5em" }}
                  />
                )}
              />
            </Grid>
            <ThemeProvider theme={addNewTaskTime}>
              <Grid item xs={12} sm={6}>
                <TimePicker
                  label="End Time"
                  value={endTime}
                  onChange={(newValue) => {
                    setEndTime(newValue);
                  }}
                  inputRef={endTimeInputRef}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      error={isEndTimeError === true}
                      // sx={{ padding: "0em 0.5em" }}
                    />
                  )}
                />
              </Grid>
            </ThemeProvider>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Planned Task"
                fullWidth
                variant="standard"
                inputRef={plannedTaskInputRef}
                required
                error={isTaskError === true}
                // helperText={isError === true ? "Planned task is mandatory" : ""}
              />
            </Grid>
            <Grid item xs={6} sm={2}>
              Ugt
              <Checkbox
                inputRef={isUrgentPlannedRef}
                checked={plannedUrgent}
                onChange={(event) =>
                  handleCheckEventChange(event, setPlannedUrgent)
                }
                value={plannedUrgent}
              />
            </Grid>
            <Grid item xs={6} sm={2}>
              Imp{" "}
              <Checkbox
                inputRef={isImportantPlannedRef}
                checked={plannedImportant}
                onChange={(event) =>
                  handleCheckEventChange(event, setPlannedImportant)
                }
                value={plannedImportant}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}

export default NewTask;
