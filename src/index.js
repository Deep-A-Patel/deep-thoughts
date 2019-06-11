import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DeepThoughts from "./DeepThoughts";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <Router>
    <CssBaseline />
    <DeepThoughts />
  </Router>,
  document.getElementById("root")
);
