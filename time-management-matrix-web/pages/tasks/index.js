import TaskList from "../../components/Tasks/TaskList";
import NewTask from "../../components/Tasks/NewTask";
import { Fragment } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { Box } from "@mui/material";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Tasks(props) {
  const { data: session } = useSession();
  const [today] = new Date().toISOString().split("T");
  const nothing = "";
  const { data, error } = useSWR(
    "/api/tasks/" + session?.user?.email + "/" + today,
    fetcher
  );

  async function addTaskHandler(enteredTaskData) {
    enteredTaskData = {
      ...enteredTaskData,
      user: session.user.email,
      taskDate: today,
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
        <>
          <TaskList tasks={data}></TaskList>
          <NewTask open={false} onAddTask={addTaskHandler}></NewTask>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default Tasks;
