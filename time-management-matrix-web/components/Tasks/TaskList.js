import * as React from "react";
import Box from "@mui/material/Box";
import Task from "./Task";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { buttonOrageOutlineTheme } from "../../theme/theme";
import { ThemeProvider } from "@mui/material/styles";

function TaskList(props) {
  return (
    <Fragment>
      <Box sx={{ width: "100%", padding: "2em 5em" }}>
        <Task></Task>
        <Task></Task>
        <Typography align="right">
          <ThemeProvider theme={buttonOrageOutlineTheme}>
            <Button variant="outlined">Add New</Button>
          </ThemeProvider>
        </Typography>
      </Box>
    </Fragment>
  );
}

export default TaskList;
