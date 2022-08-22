import { createTheme } from "@mui/material/styles";

export const buttonOrageOutlineTheme = createTheme({
  palette: {
    primary: {
      main: "#ffa000",
    },
  },
});

export const topAppBarTheme = createTheme({
  components: {
    // Name of the component
    MuiToolbar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "#212121",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "#212121",
          padding: "0 5em",
          color: "#eceff1",
          fontWeight: 900,
        },
      },
    },
  },
});
