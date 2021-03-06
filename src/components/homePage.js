import React from "react";
import { connect } from "react-redux";
import LoginPage from "./loginPage";
import MainPage from "./mainPage";

function HomePage(props) {
  // alert('homepage');
  const { user } = props;
  return !user ? <LoginPage /> : <MainPage />;
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
