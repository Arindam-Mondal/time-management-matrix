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

function NewTask(props) {
  const [open, setOpen] = useState(props.open);
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
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckEventChange = (event, updateCheckhandler) => {
    updateCheckhandler(event.target.checked);
  };

  const handleAdd = () => {
    const enteredStartTime = startTimeInputRef.current.value;
    const enteredEndTime = endTimeInputRef.current.value;
    const eneteredPlannedTask = plannedTaskInputRef.current.value;
    const enteredIsUrgentPlanned = plannedUrgent;
    const enteredIsImportantPlanned = plannedImportant;
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
        <DialogTitle>Plan a new Task</DialogTitle>
        <DialogContent style={{ paddingTop: "0.5em" }}>
          <TimePicker
            label="Start Time"
            value={startTime}
            onChange={(newValue) => {
              setStartTime(newValue);
            }}
            inputRef={startTimeInputRef}
            renderInput={(params) => (
              <TextField {...params} sx={{ padding: "0em 0.5em" }} />
            )}
          />
          <TimePicker
            label="End Time"
            value={endTime}
            onChange={(newValue) => {
              setEndTime(newValue);
            }}
            inputRef={endTimeInputRef}
            renderInput={(params) => (
              <TextField {...params} sx={{ padding: "0em 0.5em" }} />
            )}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Planned Task"
            fullWidth
            variant="standard"
            inputRef={plannedTaskInputRef}
          />
          Urgent{" "}
          <Checkbox
            inputRef={isUrgentPlannedRef}
            checked={plannedUrgent}
            onChange={(event) =>
              handleCheckEventChange(event, setPlannedUrgent)
            }
            value={plannedUrgent}
          />
          Important{" "}
          <Checkbox
            inputRef={isImportantPlannedRef}
            checked={plannedImportant}
            onChange={(event) =>
              handleCheckEventChange(event, setPlannedImportant)
            }
            value={plannedImportant}
          />
          {/* Completed as Planned{" "}
          <Checkbox
            inputRef={isCompleteInputRef}
            checked={plannedComplete}
            onChange={(event) =>
              handleCheckEventChange(event, setPlannedComplete)
            }
            value={plannedComplete}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Actual Task"
            fullWidth
            variant="standard"
            inputRef={actualTaskInputRef}
          />
          Urgent{" "}
          <Checkbox
            inputRef={isUrgentActualRef}
            checked={actualUrgent}
            onChange={(event) => handleCheckEventChange(event, setActualUrgent)}
            value={actualUrgent}
          />
          Important{" "}
          <Checkbox
            inputRef={isImportantActualRef}
            checked={actualImportant}
            onChange={(event) =>
              handleCheckEventChange(event, setActualImportant)
            }
            value={actualImportant}
          /> */}
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
