import { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function TaskDate(props) {
  const [today] = new Date().toISOString().split("T");
  const [date, setDate] = useState(today);
  const dateChangeHandler = (type) => {
    const currentDate = new Date(date);
    if (type === "PREV") {
      const prevDate = new Date(currentDate.getTime() - 1000 * 60 * 60 * 24 * 1)
        .toISOString()
        .split("T")[0];
      setDate(prevDate);
      props.onUpdateDate(prevDate);
    }
    if (type === "NEXT") {
      console.log("here");
      const nextDate = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 1)
        .toISOString()
        .split("T")[0];
      console.log("nextDate " + nextDate);
      setDate(nextDate);
      props.onUpdateDate(nextDate);
    }
  };
  return (
    <Grid container justifyContent="center" sx={{ marginBottom: "0.5em" }}>
      <Typography
        sx={{
          backgroundColor: "#ffa000",
          borderRadius: "20px",
          color: "#e3f2fd",
        }}
      >
        <IconButton
          aria-label="Back"
          sx={{ color: "#e3f2fd" }}
          onClick={() => {
            dateChangeHandler("PREV");
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        {date}
        <IconButton
          aria-label="Forward"
          sx={{ color: "#e3f2fd" }}
          onClick={() => {
            dateChangeHandler("NEXT");
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Typography>
    </Grid>
  );
}

export default TaskDate;
