import Head from "next/head";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Fragment } from "react";
import Link from "next/link";
import { Box } from "@mui/system";
import TimeManager from "../public/header-tag-line-quotes.svg";
import ManageTask from "../public/manage-task.svg";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Arima",
      textTransform: "none",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "quote" },
          style: {
            // fontWeight: "bold",
            paddingTop: "20px",
            paddingBottom: "25px",
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            fontFamily: "Arima",
          },
        },
        {
          props: { variant: "manage-task" },
          style: {
            // fontWeight: "bold",
            padding: "20px 0",
            display: "flex",
            justifyContent: "center",

            fontSize: "40px",
            fontFamily: "Arima",
          },
        },
      ],
    },
  },
});

function Home(props) {
  console.log("Console.log " + process.env.NEXTAUTH_SECRET);
  return (
    <Box>
      {/* <ThemeProvider theme={theme}> */}
      <Grid container sx={{ justifyContent: "center", padding: "1em 0em" }}>
        {/** Header Image in the Body :: Start */}
        <Grid item xs={1}></Grid>
        <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/header-tag-line-quotes.svg"
            alt="Picture of the author"
            width={700}
            height={80}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        {/** Header Image in the Body :: End */}
        {/** Main Image in the Body :: Start */}
        <Grid item xs={1}></Grid>
        <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/main-page.png"
            alt="Picture of the author"
            width={450}
            height={300}
            // layout="fill"
          />
        </Grid>
        <Grid item xs={1}></Grid>
        {/** Main Image in the Body :: End */}
        {/** Header Image in the Body :: Start */}
        <Grid item xs={1}></Grid>
        <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
          <Link href="/tasks">
            <a>
              <Image
                src="/manage-task.svg"
                alt="Picture of the author"
                width={700}
                height={80}
              />
            </a>
          </Link>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  );
}

export default Home;
