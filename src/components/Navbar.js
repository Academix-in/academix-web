import React, { useContext, useState } from "react";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "./Drawer";
import { AuthContext } from "../contexts/AuthContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    float: "right",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.2)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  verifyBtn: {
    backgroundColor: "#2f5596",
    color: "white",
    "& :hover": {
      backgroundColor: "#2f5596",
    },
  },
});

function Navbar() {
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);
  const { currentUser, logout, verifyEmail } = useContext(AuthContext);
  const loginHandle = () => {
    setDrawerState(true);
    document.querySelector("body").classList.add("drawer-open");
  };

  const closeHandle = () => {
    setDrawerState(false);
    document.querySelector("body").classList.remove("drawer-open");
  };

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <>
      <Drawer drawerState={drawerState} closeHandle={closeHandle} />
      <header>
        <div class="container">
          <nav>
            <div class="logo-container">
              <img class="logo" src="images/logo.png" alt="Logo" />
            </div>
            {currentUser === null ? (
              <div class="login-btn" onClick={loginHandle}>
                Login
              </div>
            ) : (
              <>
                <p>
                  Hello, {currentUser.displayName},{currentUser.phoneNumber},
                  {currentUser.email}
                </p>
                <div class="login-btn" onClick={handleLogout}>
                  Logout
                </div>
              </>
            )}
          </nav>
        </div>
      </header>

      {verifyEmail && currentUser !== null && (
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Confirm your email: {currentUser.email}
            </Typography>
            <Typography variant="body2" component="p">
              Check your inbox for Academix confirmation email. A correct email
              address helps to ensure you don't lose access to your account.
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <div class="login-btn">Verify</div>
          </CardActions>
        </Card>
      )}
    </>
  );
}

export default Navbar;
