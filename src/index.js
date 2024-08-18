import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
import App from "./App";
import Login from "./Login/login";
// import { MetaMaskProvider } from "@metamask/sdk-react";
import "./index.css";

// root.render(
//   <React.StrictMode>
//     <MetaMaskProvider
//       debug={false}
//       sdkOptions={{
//         dappMetadata: {
//           name: "Example React Dapp",
//           url: window.location.href,
//         },
//         infuraAPIKey: process.env.INFURA_API_KEY,
//         // Other options.
//       }}
//     >
//       <App />
//     </MetaMaskProvider>
//   </React.StrictMode>
// );

// Create a Parent component to render both App and Login
const Main = () => {
	return (
		// <MetaMaskProvider
		// 	debug={true}
		// 	sdkOptions={{
		// 		dappMetadata: {
		// 			name: "Example React Dapp",
		// 			url: window.location.href,
		// 		},
		// 		infuraAPIKey: process.env.INFURA_API_KEY,
		// 		// Other options.
		// 	}}
		// >
		<div>
			<App />
			<Login />
		</div>
		// </MetaMaskProvider>
	);
};

// Render the Parent component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
