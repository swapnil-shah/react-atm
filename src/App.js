import React, { Component } from "react";
import logo from "./ga.png";

import Account from "./Account";

class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav"></div>
        <Account name="Checking" />
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
