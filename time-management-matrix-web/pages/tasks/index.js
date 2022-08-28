import { useState } from "react";
import TaskList from "../../components/Tasks/TaskList";
import NewTask from "../../components/Tasks/NewTask";
import { useSession } from "next-auth/react";
import useSWR, { mutate } from "swr";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import TaskDate from "../../components/Tasks/TaskDate";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Tasks(props) {
  const { data: session } = useSession();
  const [today] = new Date().toISOString().split("T");
  const [date, useDate] = useState(today);
  const nothing = "";
  const { data, error } = useSWR(
    "/api/tasks/" + session?.user?.email + "/" + date,
    fetcher
  );

  function updateDateHandler(date) {
    useDate(date);
  }

  async function taskCompleteHandler(data) {
    console.table("Key" + data.id);
    console.table("Value" + data.isComplete);
    const updatedData = {
      ...data,
      status: data.isComplete ? "DONE" : "ENTERED",
    };
    await fetcher("/api/update-task", {
      method: "POST",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //mutating as fetcher would not know that there has been an update in the dab and can fetch the latest data from db.
    //[TODO] remove the hardcoded url and store it in a constant
    mutate("/api/tasks/" + session?.user?.email + "/" + date);
  }

  /**
   * Handler to add New Task
   * @param {*} enteredTaskData
   */
  async function addTaskHandler(enteredTaskData) {
    enteredTaskData = {
      ...enteredTaskData,
      user: session.user.email,
      taskDate: date,
    };
    await fetcher("/api/new-task", {
      method: "POST",
      body: JSON.stringify(enteredTaskData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //mutating as fetcher would not know that there has been an update in the dab and can fetch the latest data from db.
    //[TODO] remove the hardcoded url and store it in a constant
    mutate("/api/tasks/" + session?.user?.email + "/" + date);
  }

  return (
    <Box>
      {session ? (
        <Grid container sx={{ justifyContent: "center", padding: "2em 0em" }}>
          <Grid xs={1} sm={2} md={4} lg={4}></Grid>
          <Grid xs={10} sm={8} md={4} lg={4}>
            <TaskDate onUpdateDate={updateDateHandler} />
            {/* <Divider sx={{ margin: "1em 0em" }} /> */}
            <TaskList
              tasks={data}
              onTaskComplete={taskCompleteHandler}
            ></TaskList>
            <NewTask open={false} onAddTask={addTaskHandler}></NewTask>
          </Grid>
          <Grid xs={1} sm={2} md={4} lg={4}></Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default Tasks;
