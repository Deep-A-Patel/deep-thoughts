import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Posts from "./posts/Posts";
import SignIn from "./auth/Login";
import SignUp from "./auth/SignUp";
import { ProtectedRoute } from "./ProtectedRoute";

class ApplicationViews extends Component {
  state = {
    loggedInUser: [],
    posts: [{ id: 1, name: "Blah" }]
  };

  render() {
    return (
      <div
        className="applicationViews"
        style={{ width: "90%", margin: "1rem auto" }}
      >
        <Route
          exact
          path="/login"
          render={props => {
            return (
              <SignIn
                {...props}
                loggedIn={this.props.isUserLoggedIn}
                login={this.props.login}
              />
            );
          }}
        />
        <Route
          exact
          path="/sign-up"
          render={props => {
            return (
              <SignUp
                {...props}
                loggedIn={this.props.isUserLoggedIn}
                register={this.props.register}
              />
            );
          }}
        />
        <ProtectedRoute
          loggedIn={this.props.loggedIn}
          exact
          path="/"
          render={props => (
            <Posts
              posts={this.state.posts}
              filterParams={this.props.filterParams}
              {...props}
            />
          )}
        />
        <ProtectedRoute
          loggedIn={this.props.loggedIn}
          exact
          path="/posts"
          render={props => (
            <Posts
              posts={this.state.posts}
              filterParams={this.props.filterParams}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(ApplicationViews);
