import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import FrontPage from "../components/frontPage";

import { userManager, userManagerOlympus } from "../utils/userManager";

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


        // Failed to validate age check
        if(!over18) {
            // alert("under 18, sending back to front");
            alert("Issuance valid!")
            return <FrontPage />
        }

        return (
            <div style={styles.root}>
                <div style={styles.title}>
                    <img src="uoi.png"/>

                    <h3>Welcome, {user ? user.profile.name : "Mister Unknown"}!</h3>
                    Issuance Ok !<br/>
                    {/*A reservation has been made in your name!*/}
                    <h4>Username: {user ? user.profile.sub : "Subname"}</h4>
                    <h4>Birthdate: {user ? user.profile.birthdate : "Birth"}</h4>
                    <h4>University: {user ? user.profile.university : "University"}</h4>
                    <h4>Student Id: {user ? user.profile.studentid : "Student Id"}</h4>
                    <h4>Course: {user ? user.profile.course : "Course"}</h4>

                </div>
                <button
                    onClick={event => {
                        event.preventDefault();
                        userManager.signinRedirect();
                        userManagerOlympus.signinRedirect();
                        this.props.dispatch(push("/"));
                    }}
                >
                    Logout
                </button>

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
