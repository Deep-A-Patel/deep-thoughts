import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const style = createMuiTheme({
  palette: {
    primary: {
      main: "#016c75"
    },
    primaryDark: {
      main: "#85AAC6"
    },
    navText: {
      main: "#d4bff6"
    },
    secondary: { main: "#05B52D" },
    error: { main: "#DB3630" }
  }
});

export function CustomTheme(props) {
  return <ThemeProvider theme={style}>{props.children}</ThemeProvider>;
}
