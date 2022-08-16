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
  const [value, setValue] = useState(null);

  const startTimeInputRef = useRef();
  const endTimeInputRef = useRef();
  const plannedTaskInputRef = useRef();
  const isUrgentPlannedRef = useRef();
  const isImportantPlannedRef = useRef();
  const isCompleteInputRef = useRef();
  const actualTaskInputRef = useRef();
  const isUrgentActualRef = useRef();
  const isImportantActualRef = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    const enteredStartTime = startTimeInputRef.current.value;
    const enteredEndTime = endTimeInputRef.current.value;
    const eneteredPlannedTask = plannedTaskInputRef.current.value;
    const enteredIsUrgentPlanned = isUrgentPlannedRef.current.value;
    const enteredIsImportantPlanned = isImportantPlannedRef.current.value;
    const enteredIsComplete = isCompleteInputRef.current.value;
    const enteredActualTask = actualTaskInputRef.current.value;
    const enteredIsUrgentActual = isUrgentActualRef.current.value;
    const enteredIsImportantActual = isImportantActualRef.current.value;

    const taskData = {
      startTime: enteredStartTime,
      endTime: enteredEndTime,
      plannedTask: eneteredPlannedTask,
      isUrgentPlanned: enteredIsUrgentPlanned,
      isImportantPlanned: enteredIsImportantPlanned,
      isComplete: enteredIsComplete,
      actualTask: enteredActualTask,
      isUrgentActual: enteredIsUrgentActual,
      isImportantActual: enteredIsImportantActual,
    };

    props.onAddTask(taskData);
    setOpen(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box sx={{ width: "100%", padding: "0em 5em" }}>
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
        <DialogContent>
          <TimePicker
            label="Start Time"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            inputRef={startTimeInputRef}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="End Time"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            inputRef={endTimeInputRef}
            renderInput={(params) => <TextField {...params} />}
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
          Urgent <Checkbox defaultChecked inputRef={isUrgentPlannedRef} />
          Important <Checkbox defaultChecked inputRef={isImportantPlannedRef} />
          Completed as Planned{" "}
          <Checkbox defaultChecked inputRef={isCompleteInputRef} />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Actual Task"
            fullWidth
            variant="standard"
            inputRef={actualTaskInputRef}
          />
          Urgent <Checkbox defaultChecked inputRef={isUrgentActualRef} />
          Important <Checkbox defaultChecked inputRef={isImportantActualRef} />
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
