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
          backgroundColor: "white",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "white",
          padding: "0 5em",
          color: "#415381",
          fontWeight: 900,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: "Arima",
        },
      },
    },
  },
});
