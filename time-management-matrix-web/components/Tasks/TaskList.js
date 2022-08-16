import * as React from "react";
import Box from "@mui/material/Box";
import Task from "./Task";
import { Fragment } from "react";

function TaskList(props) {
  return (
    <Fragment>
      <Box sx={{ width: "100%", padding: "2em 5em" }}>
        <Task></Task>
        <Task></Task>
      </Box>
    </Fragment>
  );
}

export default TaskList;
