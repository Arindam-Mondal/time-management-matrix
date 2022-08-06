import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LoginOutlinedIcon from "@mui/icons-material/LoginTwoTone";
import Tooltip from "@mui/material/Tooltip";
import { useSession, signIn, signOut } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import { topAppBarTheme } from "../../theme/theme";

const settings = ["Profile", "Logout"];

function TopAppBar(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    if (setting == settings[1]) {
      signOut();
    }
    setAnchorElUser(null);
  };

  const { data: session } = useSession();

  return (
    <ThemeProvider theme={topAppBarTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              component="div"
              sx={{ flexGrow: 1, fontWeight: 600, fontSize: "x-large" }}
            >
              Time Management Matrix
            </Typography>
            {session ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Google Image" src={session.user.image} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => {
                        handleCloseUserMenu(setting);
                      }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              // <IconButton aria-label="logout" onClick={() => signOut()}>
              //   <LogoutRoundedIcon />
              // </IconButton>
              <Button
                variant="login"
                endIcon={<LoginOutlinedIcon />}
                onClick={() => signIn()}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default TopAppBar;
