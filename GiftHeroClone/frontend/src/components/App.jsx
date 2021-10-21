import React, { Component } from "react";
import { render } from "react-dom";
import Router from "./Router";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
