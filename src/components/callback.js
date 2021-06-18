import React from "react";
import { connect } from "react-redux";
import { CallbackComponent, USER_FOUND } from "redux-oidc";
import { push } from "react-router-redux";
import { userManagerOlympus } from "../utils/userManager";

class CallbackPage extends React.Component {
  render() {
    // just redirect to '/' in both cases
    return (
      <div>
      <CallbackComponent
        userManager={userManagerOlympus}
        successCallback={user => {
          this.props.dispatch({
            type: USER_FOUND,
            payload: user
          })
          this.props.dispatch(push("/"));
        }}
        errorCallback={(error) => {
          this.props.dispatch(push("/"));
          console.error(error);
        }}
      >
        <div>Redirecting...</div>
      </CallbackComponent>
      </div>
    );
  }
}

export default connect()(CallbackPage);
