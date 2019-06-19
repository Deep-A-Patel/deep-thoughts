import React, { Component } from "react";

import { Button } from "@material-ui/core";

export default class Sidebar extends Component {
  render() {
    const { setFilterParams } = this.props;
    return (
      <>
        <div
          className="sidebar"
          style={{
            position: "fixed",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "13px"
          }}
        >
          <Button
            variant="outlined"
            onClick={() => setFilterParams("Movie")}
            style={{ color: "white" }}
          >
            Movies
          </Button>
          <Button
            variant="outlined"
            onClick={() => setFilterParams("TV")}
            style={{ color: "white" }}
          >
            TV
          </Button>
          <Button
            variant="outlined"
            onClick={() => setFilterParams("Music")}
            style={{ color: "white" }}
          >
            Music
          </Button>
          <Button
            variant="outlined"
            onClick={() => setFilterParams("Politics")}
            style={{ color: "white" }}
          >
            Politics
          </Button>
          <Button
            variant="outlined"
            onClick={() => setFilterParams("Travel")}
            style={{ color: "white" }}
          >
            Travel
          </Button>
          <Button
            variant="outlined"
            onClick={() => setFilterParams("Other")}
            style={{ color: "white" }}
          >
            Other
          </Button>
          <Button
            variant="outlined"
            onClick={() => setFilterParams(null)}
            style={{ color: "white" }}
          >
            Show All
          </Button>
        </div>
      </>
    );
  }
}
