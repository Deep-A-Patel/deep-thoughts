import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import { Event, LockOpen } from "@material-ui/icons";

import "./navbar.css";

export default class Navbar extends Component {
  state = {
    isUserLoggedIn: true,
    tabValue: false
  };

  links = [
    {
      key: 1,
      name: "Posts",
      icon: Event,
      href: "/posts",
      linkAction: ""
    }
  ];

  logoutLink = {
    key: 2,
    name: "Sign out",
    icon: LockOpen,
    href: "/login",
    linkAction: "",
    onClick: this.handleLogout
  };

  handleTabChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  handleLogout = () => {
    this.props.logout();
  };

  handleMainPage = () => {
    this.setState({ tabValue: false });
  };

  makeIcon = Icon => <Icon />;
  makeLink = link => {
    return (
      <Tab
        key={link.key}
        style={{ minWidth: 80 }}
        label={link.name}
        value={link.href}
        component={Link}
        to={link.href}
        icon={this.makeIcon(link.icon)}
      />
    );
  };

  render() {
    return (
      <AppBar
        color="primary"
        position="fixed"
        className="navbar"
        style={{ zIndex: 1900 }}
      >
        <div className="navbar navbar-flexrow">
          <div>
            <Link onClick={this.handleMainPage} to="/">
              <Typography
                variant="h4"
                component="h2"
                style={{ color: "lightgray" }}
              >
                DeepThoughts
              </Typography>
            </Link>
          </div>
          {this.props.loggedIn ? (
            <div className="navbar-linkContainer navbar-flexrow">
              <Tabs value={this.state.tabValue} onChange={this.handleTabChange}>
                {this.links.map(this.makeLink)}
              </Tabs>

              <div
                className="navbar-logoutContainer"
                onClick={this.handleLogout}
              >
                {this.makeLink(this.logoutLink)}
              </div>
            </div>
          ) : null}
        </div>
      </AppBar>
    );
  }
}
