import { Box, Button } from "@material-ui/core";
import DirectionsIcon from '@material-ui/icons/Directions';
import React from "react";
import { userManager,userManagerOlympus } from "../utils/userManager";

class LoginPage extends React.Component {

  onLoginClick(event) {
    event.preventDefault();
    userManager.signinRedirect();
  }
  onLoginClickOlympus(event) {
    event.preventDefault();
    userManagerOlympus.signinRedirect();
  }

  render() {
    return (
      <Box style={styles.root}>
        {/*<Button*/}
        {/*  size="large"*/}
        {/*  variant="outlined"*/}
        {/*  startIcon={<DirectionsIcon />}*/}
        {/*  onClick={this.onLoginClick}*/}
        {/*>*/}
        {/*  Connect with KeyCloak*/}
        {/*</Button>*/}
        <Button
          size="large"
          variant="outlined"
          startIcon={<DirectionsIcon />}
          onClick={this.onLoginClickOlympus}
        >
         Login with University of Ioannina Credential System
        </Button>
      </Box>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flexShrink: 1,
  },
};

export default LoginPage;
