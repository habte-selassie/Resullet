import React, { Component } from "react";
import "./App.css";
// import AppSupa from "./AppSupa";
import MetamaskConnection from "./screens/metamask/MetamaskConnection";

class App extends Component {
	render() {
		return <MetamaskConnection />;
		// return <AppSupa />;
	}
}

export default App;
