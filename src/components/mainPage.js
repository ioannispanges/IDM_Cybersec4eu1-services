import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import FrontPage from "./frontPage";
import swal from 'sweetalert';


import { userManager, userManagerOlympus } from "../utils/userManager";
import {TextField} from "@material-ui/core";

class MainPage extends React.Component {

    render() {
        const { user } = this.props;
        console.log("start user");
        console.log(user);
        console.log("end user");

        //  user profile and check if user is > 18 years
        var birthdate = user.profile.birthdate;
        var today = new Date();
        console.log(today.getYear());
        today.setYear(today.getYear()+1900-18);
        var over18 = (new Date(birthdate)<today);

        // swal({
        //     title: "Are you sure?",
        //     text: "Once deleted, you will not be able to recover this imaginary file!",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        // }).then(function () {
        //
        //     swal(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //     ).then(r =>window.location.href='http://localhost:8080/changePassword')
        // })

        swal({
            title: "Reminder!",
            text: "You need change your password. If you do it please click cancel!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("You need change your password!", {
                        icon: "info",
                    }).then(r => window.location.href='http://localhost:8080/changePassword');
                } else {
                    swal("You change the password with first login!", {
                        icon: "success",
                    })
                }
            });

        // if (window.confirm('You need change your password. If you do it click cancel '))
        // {
        //      window.location.href='http://localhost:8080/changePassword';
        //    // window.open('http://localhost:8080/changePassword', '_blank');
        //
        // }

        // Failed to validate age check
        if(!over18) {
            // alert("under 18, sending back to front");
            alert("Failed valid!")
            return <FrontPage />
        }

        return (
            <div style={styles.root}>
                <div style={styles.title}>
                    <img src="cybersecuoi.png" width="250" height="160"/>


                    <h4 style={{color: "grey"}}>Full Name:{user ? user.profile.name : "Mister Unknown"}</h4>

                    {/*<h4>Username: {user ? user.profile.sub : "Subname"}</h4>*/}
                    {/*<h4>Birthdate: {user ? user.profile.birthdate : "Birth"}</h4>*/}
                    {/*<h4>University: {user ? user.profile.university : "University"}</h4>*/}
                    {/*<h4>Awarded Degree: {user ? user.profile.awardeddegree : "University"}</h4>*/}
                    {/*<h4>Student Id: {user ? user.profile.studentid : "Student Id"}</h4>*/}
                    {/*<h4>Course: {user ? user.profile.course : "Course"}</h4>*/}
                    {/*<h4>Authorization Time :{user?user.profile.auth_time:"authorization"}</h4>*/}
                    {/*<h4>Jti(JWT ID):{user?user.profile.jti:"key"}</h4>*/}

                    <h5 style={{color: "blue"}}>1.If you have a University Degree from a Department of University of Ioannina you can get your privacy-Attribute Based Credential.
                        <p>Click below to "Get a Credential" that you posses a MSc/PhD Degree from a department of University of Ioannina.</p> </h5>


                </div>



                <button
                    onClick={event => {
                        event.preventDefault();
                        userManager.getUser();
                        userManagerOlympus.storeUser();
                        this.props.dispatch(push("/credential/storage"));
                        //window.open("http://localhost:8080/login?client_id=olympus-service-provider&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FcallbackOL&response_type=id_token&scope=openid%20name&state=e93fbd7dd0764008acfb6f7d807c45d8&nonce=db57bc2d791b4908ab4f9d416ede93fa", "_blank");

                    }
                    }

                >
                Get Credential for P-ABC
                </button>

                {/*<button*/}
                {/*    onClick={event => {*/}
                {/*        userManager.removeUser();*/}
                {/*        userManagerOlympus.removeUser();*/}
                {/*        this.props.dispatch(push("credential"));*/}
                {/*    }}*/}
                {/*>*/}
                {/*    Get Credential*/}
                <h5 style={{color: "blue"}}>2.If you posses a Credential from a Department of University of Ioannina you can <p> "Verify your possessed Credential".</p></h5>
                    {/*<p>Click below to get a Credential that you posses a MSc/PhD Degree from a department of University of Ioannina</p> </h5>*/}
                <button
                    onClick={event => {
                        event.preventDefault();
                        userManager.getUser();
                        userManagerOlympus.storeUser();
                        // this.props.dispatch(push("/storage"));
                        window.open("http://localhost:8080/form1", "_blank");

                    }
                    }

                >
Verify your possessed Credential
                </button>

                {/*<button*/}
                {/*    onClick={event => {*/}
                {/*        userManager.removeUser();*/}
                {/*        userManagerOlympus.removeUser();*/}
                {/*        this.props.dispatch(push("/login"));*/}
                {/*    }}*/}
                {/*>*/}
                {/*    Logout*/}

                {/*</button>*/}

            </div>

        );
    }
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    flex: "1 0 auto"
  },
  list: {
    listStyle: "none"
  },
  li: {
    display: "flex"
  }
};

function mapStateToProps(state) {
  return {
    user: state.oidc.user,
  };
}

export default connect(mapStateToProps)(MainPage);
