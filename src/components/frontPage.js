import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Button } from "@material-ui/core";


class FrontPage extends React.Component {

    render() {

        return (
            <div style={styles.root}>
                <div style={styles.title}>
                    <h3>Welcome to the University of Ioannina Issuer </h3>
                    <img src="uoi.png"/>

                </div>
                To order, a certification , please login using the button bellow:
                <Button

                size="small"
                variant="outlined"
                    // startIcon={<DirectionsIcon />}
                    onClick={ event => {
                        event.preventDefault();
                        this.props.dispatch(push("/login"));
                    }
                    }
                >
                    Login
                </Button>
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

export default connect(mapStateToProps)(FrontPage);