import React, { Component } from "react";
import { withRouter } from "react-router";
import Navbar from "./components/nav/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ApplicationViews from "./components/ApplicationViews";
import API from "./modules/dbcalls";
import { CustomTheme } from "./components/CustomTheme";

class Nutshell extends Component {
  constructor(props) {
    super(props);
    this.user = sessionStorage.getItem("activeUser");
    this.state = { isUserLoggedIn: !!this.user };
  }

  login = (username, password) => {
    API.loginUser(username, password).then(user => {
      if (user.length === 0) {
        alert("Username And Password Do Not Match");
      } else {
        sessionStorage.setItem("activeUser", user[0].id);
        this.setState({ isUserLoggedIn: true });
        this.props.history.push("/");
      }
    });
  };

  register = (username, email, password) => {
    const newUser = { username: username, email: email, password: password };

    API.getAllUsers().then(users => {
      if (
        users.find(
          user => username === user.username || email === user.email
        ) !== undefined
      ) {
        alert("You Are Already A User");
      } else {
        API.addUser(newUser).then(newuserInfo => {
          this.login(newuserInfo.username, newuserInfo.password);
          this.props.history.push("/");
        });
      }
    });
  };

  logout = () => {
    sessionStorage.removeItem("activeUser");
    this.props.history.push("/login");
  };

  render() {
    return (
      <CustomTheme>
        <Navbar loggedIn={this.state.isUserLoggedIn} logout={this.logout} />
        {this.state.isUserLoggedIn ? (
          <div
            className="nutshell-contentContainer"
            style={{ height: "calc(100% - 72px)", marginTop: "72px" }}
          >
            <Sidebar loggedIn={this.state.isUserLoggedIn} />
            <div
              style={{
                marginLeft: "200px",
                width: "100%",
                marginTop: "calc(72px + 1rem)"
              }}
            >
              <ApplicationViews loggedIn={this.state.isUserLoggedIn} />
            </div>
          </div>
        ) : (
          <div style={{ marginTop: "calc(72px + 1rem)" }}>
            <ApplicationViews
              loggedIn={this.state.isUserLoggedIn}
              login={this.login}
              register={this.register}
            />
          </div>
        )}
      </CustomTheme>
    );
  }
}

export default withRouter(Nutshell);
