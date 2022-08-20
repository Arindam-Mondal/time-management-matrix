import * as React from "react";
import Box from "@mui/material/Box";
import Task from "./Task";
import { Fragment } from "react";
import { Grid } from "@mui/material";

function TaskList(props) {
  if (!props.tasks) return <div>Loading...</div>;

  return (
    <Grid container sx={{ justifyContent: "center", padding: "2em 0em" }}>
      <Grid xs={1} sm={2} md={4} lg={4}></Grid>
      <Grid xs={10} sm={8} md={4} lg={4}>
        {props.tasks.tasks.map((task) => (
          <Task
            key={task._id}
            startTime={task.startTime}
            endTime={task.endTime}
            plannedTask={task.plannedTask}
            isUrgentPlanned={task.isUrgentPlanned}
            isImportantPlanned={task.isImportantPlanned}
            isComplete={task.isComplete}
            actualTask={task.actualTask}
            isUrgentActual={task.isUrgentActual}
            isImportantActual={task.isImportantActual}
          ></Task>
        ))}
      </Grid>
      <Grid xs={1} sm={2} md={4} lg={4}></Grid>
    </Grid>
  );
}

export default TaskList;
