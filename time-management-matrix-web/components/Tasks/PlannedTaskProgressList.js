import { Fragment, useEffect, useState } from "react";
import PlannedTaskProgress from "./PlannedTaskProgress";

function PlannedTaskProgressMatrix(urgent, important, percentageCompletion) {
  this.urgent = urgent;
  this.important = important;
  this.percentageCompletion = percentageCompletion;
}

function PlannedTaskProgressList(props) {
  const [taskProgressList, setTaskProgressList] = useState([]);
  useEffect(() => {
    const defaultProgress = (0.0).toFixed(2);
    //Creating a deep copy of the object
    const tasksCopy = props.tasks
      ? JSON.parse(JSON.stringify(props.tasks))
      : { tasks: [] };
    let countUNIN = 0;
    let countUNIY = 0;
    let countUYIN = 0;
    let countUYIY = 0;

    let countUNINDone = 0;
    let countUNIYDone = 0;
    let countUYINDone = 0;
    let countUYIYDone = 0;

    tasksCopy.tasks.forEach((task) => {
      if (task.isImportantPlanned && task.isUrgentPlanned) {
        countUYIY++;
        countUYIYDone =
          task.status === "DONE" ? countUYIYDone + 1 : countUYIYDone;
      } else if (task.isImportantPlanned) {
        countUNIY++;
        countUNIYDone =
          task.status === "DONE" ? countUNIYDone + 1 : countUNIYDone;
      } else if (task.isUrgentPlanned) {
        countUYIN++;
        countUYINDone =
          task.status === "DONE" ? countUYINDone + 1 : countUYINDone;
      } else {
        countUNIN++;
        countUNINDone =
          task.status === "DONE" ? countUNINDone + 1 : countUNINDone;
      }
    });

    const urgYesImpYes = new PlannedTaskProgressMatrix(
      true,
      true,
      countUYIY == 0
        ? defaultProgress
        : ((countUYIYDone / countUYIY) * 100).toFixed(2)
    );

    const urgYesImpNo = new PlannedTaskProgressMatrix(
      true,
      false,
      countUYIN == 0
        ? defaultProgress
        : ((countUYINDone / countUYIN) * 100).toFixed(2)
    );

    const urgNoImpYes = new PlannedTaskProgressMatrix(
      false,
      true,
      countUNIY == 0
        ? defaultProgress
        : ((countUNIYDone / countUNIY) * 100).toFixed(2)
    );

    const urgNoImpNo = new PlannedTaskProgressMatrix(
      false,
      false,
      countUNIN == 0
        ? defaultProgress
        : ((countUNINDone / countUNIN) * 100).toFixed(2)
    );

    const plannedTaskProgressMatrixArray = [
      urgYesImpYes,
      urgYesImpNo,
      urgNoImpYes,
      urgNoImpNo,
    ];

    setTaskProgressList(
      JSON.parse(JSON.stringify(plannedTaskProgressMatrixArray))
    );
  }, [props.tasks]);

  return (
    <Fragment>
      {taskProgressList.map((progress, index) => (
        <PlannedTaskProgress
          key={index}
          progress={progress}
        ></PlannedTaskProgress>
      ))}
    </Fragment>
  );
}

export default PlannedTaskProgressList;
