import React from "react";
import { connect } from "react-redux";
import { CallbackComponent, USER_FOUND } from "redux-oidc";
import { push } from "react-router-redux";
import { userManagerOlympus } from "../utils/userManager";
import swal from 'sweetalert';

class CallbackPageOL extends React.Component {
    render(message) {
        // just redirect to '/' in both cases
        return (
            <div>
                <CallbackComponent
                    userManager={userManagerOlympus}

                    successCallback={user => {
                        // console.log(user)
                        //  alert("Your account has been successfully registered Full Name: "+user.profile.name+ "from the university : "+user.profile.university+"with student id: "+ user.profile.studentid)
                         window.alert("Your account has been successfully registered ")

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

export default connect()(CallbackPageOL);