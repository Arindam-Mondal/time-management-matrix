import { useState } from "react";
import TaskList from "../../components/Tasks/TaskList";
import NewTask from "../../components/Tasks/NewTask";
import { useSession } from "next-auth/react";
import useSWR, { useSWRConfig } from "swr";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import TaskDate from "../../components/Tasks/TaskDate";
import PlannedTaskProgressList from "../../components/Tasks/PlannedTaskProgressList";
import AddchartTwoToneIcon from "@mui/icons-material/AddchartTwoTone";
import DisabledByDefaultTwoToneIcon from "@mui/icons-material/DisabledByDefaultTwoTone";
import { IconButton } from "@mui/material";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Tasks(props) {
  const { data: session } = useSession();
  const [today] = new Date().toISOString().split("T");
  const [showProgress, setShowProgress] = useState(false);
  const [date, setDate] = useState(today);
  const nothing = "";
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR(
    "/api/tasks/" + session?.user?.email + "/" + date,
    fetcher
  );

  function updateDateHandler(date) {
    setDate(date);
  }

  function toggleShowProgress() {
    setShowProgress(!showProgress);
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

  async function deleteTaskHandler(id) {
    await fetcher("/api/tasks/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    debugger;
    //mutating as fetcher would not know that there has been an update in the dab and can fetch the latest data from db.
    //[TODO] remove the hardcoded url and store it in a constant
    mutate("/api/tasks/" + session?.user?.email + "/" + date);
    console.log("test");
  }

  return (
    <Box>
      {session ? (
        <Grid container sx={{ justifyContent: "center", padding: "2em 0em" }}>
          <Grid xs={1} sm={2} md={4} lg={4}></Grid>
          <Grid xs={10} sm={8} md={4} lg={4}>
            {data && data.tasks.length > 0 ? (
              <Box>
                {showProgress ? (
                  <Box>
                    <Box
                      sx={{
                        textAlign: "right",
                      }}
                    >
                      <IconButton
                        aria-label="show Progress"
                        onClick={toggleShowProgress}
                      >
                        <DisabledByDefaultTwoToneIcon />
                      </IconButton>
                    </Box>
                    <PlannedTaskProgressList
                      tasks={data}
                    ></PlannedTaskProgressList>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      textAlign: "right",
                    }}
                  >
                    <IconButton
                      aria-label="show Progress"
                      onClick={toggleShowProgress}
                    >
                      <AddchartTwoToneIcon />
                    </IconButton>
                  </Box>
                )}
              </Box>
            ) : (
              <></>
            )}

            <TaskDate onUpdateDate={updateDateHandler} />
            <TaskList
              tasks={data}
              onTaskComplete={taskCompleteHandler}
              onDeleteTask={deleteTaskHandler}
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
