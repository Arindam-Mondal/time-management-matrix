import * as React from "react";
import Task from "./Task";
import { Fragment } from "react";

function TaskList(props) {
  if (!props.tasks) return <div>Loading...</div>;

  return (
    <Fragment>
      {props.tasks.tasks.map((task) => (
        <Task
          key={task._id}
          taskId={task._id}
          startTime={task.startTime}
          endTime={task.endTime}
          plannedTask={task.plannedTask}
          isUrgentPlanned={task.isUrgentPlanned}
          isImportantPlanned={task.isImportantPlanned}
          isComplete={task.isComplete}
          actualTask={task.actualTask}
          isUrgentActual={task.isUrgentActual}
          isImportantActual={task.isImportantActual}
          status={task.status}
          onTaskComplete={props.onTaskComplete}
        ></Task>
      ))}
    </Fragment>
  );
}

export default TaskList;
