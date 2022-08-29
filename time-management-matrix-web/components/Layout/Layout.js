import { Paper } from "@mui/material";
import { Box, Container } from "@mui/system";
import TopAppBar from "../TopAppBar/TopAppBar";

function Layout(props) {
  return (
    <div>
      <TopAppBar></TopAppBar>
      <Box sx={{ paddingTop: "80px" }}>
        <main>{props.children}</main>
      </Box>
    </div>
  );
}

export default Layout;
