import React from "react";
import { userManager } from "../utils/userManager";
import { OidcProvider } from "redux-oidc";
import Routes from "../routing/routes";
import store from "../store/store";
import Root from "./root";
import { Paper } from "material-ui";
import { Container } from "@material-ui/core";
import { theme } from '../theme'
import { MuiThemeProvider } from "material-ui/styles";

function App() {
  return (
    <Container>
        <MuiThemeProvider theme={theme}>
          <Paper>
            <OidcProvider store={store} userManager={userManager}>
              <Root>
                <Routes />
              </Root>
            </OidcProvider>
          </Paper>
        </MuiThemeProvider>
    </Container>
  );
}

export default App;
