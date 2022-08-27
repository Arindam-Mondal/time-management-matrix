import { useState } from "react";
import TaskList from "../../components/Tasks/TaskList";
import NewTask from "../../components/Tasks/NewTask";
import { useSession } from "next-auth/react";
import useSWR from "swr";
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
  async function addTaskHandler(enteredTaskData) {
    enteredTaskData = {
      ...enteredTaskData,
      user: session.user.email,
      taskDate: date,
    };
    const response = await fetch("/api/new-task", {
      method: "POST",
      body: JSON.stringify(enteredTaskData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newTask = await response.json();

    console.log(newTask);
  }

  return (
    <Box>
      {session ? (
        <Grid container sx={{ justifyContent: "center", padding: "2em 0em" }}>
          <Grid xs={1} sm={2} md={4} lg={4}></Grid>
          <Grid xs={10} sm={8} md={4} lg={4}>
            <TaskDate onUpdateDate={updateDateHandler} />
            {/* <Divider sx={{ margin: "1em 0em" }} /> */}
            <TaskList tasks={data}></TaskList>
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
