import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import { buttonOrageOutlineTheme } from "../../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function NewTask(props) {
  const [open, setOpen] = React.useState(props.open);
  const [value, setValue] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Typography align="right">
        <ThemeProvider theme={buttonOrageOutlineTheme}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add New
          </Button>
        </ThemeProvider>
      </Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Plan a new Task</DialogTitle>
        <DialogContent>
          <TimePicker
            label="Start Time"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="End Time"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Planned Task"
            fullWidth
            variant="standard"
          />
          Urgent <Checkbox defaultChecked />
          Important <Checkbox defaultChecked />
          Actual same as Planned <Checkbox defaultChecked />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Actual Task"
            fullWidth
            variant="standard"
          />
          Urgent <Checkbox defaultChecked />
          Important <Checkbox defaultChecked />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}

export default NewTask;
