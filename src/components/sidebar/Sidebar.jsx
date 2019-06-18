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
            flexDirection: "column"
          }}
        >
          <Button variant="outlined" onClick={() => setFilterParams("Movie")}>
            Movies
          </Button>
          <Button variant="outlined" onClick={() => setFilterParams("TV")}>
            TV
          </Button>
          <Button variant="outlined" onClick={() => setFilterParams("Music")}>
            Music
          </Button>
          <Button
            variant="outlined"
            onClick={() => setFilterParams("Politics")}
          >
            Politics
          </Button>
          <Button variant="outlined" onClick={() => setFilterParams("Travel")}>
            Travel
          </Button>
          <Button variant="outlined" onClick={() => setFilterParams("Other")}>
            Other
          </Button>
          <Button variant="outlined" onClick={() => setFilterParams(null)}>
            Show All
          </Button>
        </div>
      </>
    );
  }
}
