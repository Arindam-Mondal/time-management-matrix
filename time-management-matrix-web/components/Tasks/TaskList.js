import * as React from "react";
import Box from "@mui/material/Box";
import Task from "./Task";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { buttonOrageOutlineTheme } from "../../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import NewTask from "./NewTask";

function TaskList(props) {
  const [open, setOpen] = React.useState(false);

  const AddNewTaskHandler = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <Box sx={{ width: "100%", padding: "2em 5em" }}>
        <Task></Task>
        <Task></Task>
        <NewTask></NewTask>
      </Box>
    </Fragment>
  );
}

export default TaskList;
