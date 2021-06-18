import React from "react";
import { connect } from "react-redux";
import { CallbackComponent, USER_FOUND } from "redux-oidc";
import { push } from "react-router-redux";
import { userManager } from "../utils/userManager";

class CallbackPageKC extends React.Component {
    render() {
        // just redirect to '/' kai sta duo cases
        return (
            <div>
                <CallbackComponent
                    userManager={userManager}

                    successCallback={user => {
                        console.log(user)
                        alert("you're logged in as "  +user.profile.sub)
                        this.props.dispatch({
                            type: USER_FOUND,
                            payload: user
                        })
                        this.props.dispatch(push("/success"));
                    }}
                    errorCallback={(error) => {
                        alert("error occured: "+error)
                        console.log(error)
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

export default connect()(CallbackPageKC);