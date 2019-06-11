import React, { Component } from "react";
import API from "../../modules/dbCalls";

export default class Sidebar extends Component {
  state = {
    allUsers: [],
    isSnackbarVisible: false
  };

  updateState = () => {
    API.getAllUsersExcluding(sessionStorage.getItem("activeUser")).then(
      allUsers => this.setState({ allUsers })
    );
  };

  hideSnackbar = () => this.setState({ isSnackbarVisible: false });
  showSnackbar = () => this.setState({ isSnackbarVisible: true });

  componentDidMount() {
    this.updateState();
  }

  render() {
    return (
      <>
        <div
          className="sidebar"
          style={{ position: "fixed", height: "100%" }}
        />
      </>
    );
  }
}
