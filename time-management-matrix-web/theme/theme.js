import { createTheme } from "@mui/material/styles";

export const buttonOrageOutlineTheme = createTheme({
  palette: {
    primary: {
      main: "#ffa000",
    },
  },
});

let theme = createTheme();

export const topAppBarTheme = createTheme(theme, {
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
          paddingTop: "1em",
          paddingLeft: "15em",
          paddingRight: "15em",
          [theme.breakpoints.down("md")]: {
            paddingLeft: "2em",
            paddingRight: "2em",
          },
          [theme.breakpoints.down("sm")]: {
            paddingLeft: "2em",
            paddingRight: "2em",
          },
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
