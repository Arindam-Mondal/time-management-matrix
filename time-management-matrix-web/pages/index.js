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
  return (
    <Fragment>
      <Head>
        <title>Time Management Matrix App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Grid container sx={{ padding: "1px" }}>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", "justify-content": "center" }}
          >
            <Box
              sx={{
                color: "red",
                backgroundImage: `url(${TimeManager.src})`,
                height: "80px",
                width: "700px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // backgrou,
              }}
            ></Box>
          </Grid>
          <Grid item xs={2} md={4}></Grid>
          <Grid item xs={8} md={4}>
            <Grid item xs={12}>
              <Image
                src="/main-page.png"
                alt="Picture of the author"
                width={600}
                height={400}
                // layout="fill"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", "justify-content": "center" }}
            >
              <Link href="/tasks">
                <a>
                  <Box
                    sx={{
                      backgroundImage: `url(${ManageTask.src})`,
                      height: "80px",
                      width: "700px",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      // backgrou,
                    }}
                  ></Box>
                </a>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={2} md={4}></Grid>
        </Grid>
      </ThemeProvider>
    </Fragment>
  );
}

export default Home;
