import TaskList from "../../components/Tasks/TaskList";
import NewTask from "../../components/Tasks/NewTask";
import { Fragment } from "react";
import { useSession } from "next-auth/react";

function Tasks(props) {
  const { data: session } = useSession();
  const [today] = new Date().toISOString().split("T");

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

    const data = await response.json();

    console.log(data);
  }
  return (
    <Fragment>
      {session ? (
        <>
          <TaskList></TaskList>
          <NewTask open={false} onAddTask={addTaskHandler}></NewTask>
        </>
      ) : (
        <></>
      )}
    </Fragment>
  );
}

export default Tasks;
