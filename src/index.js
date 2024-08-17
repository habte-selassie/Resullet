import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App';
import Login from './Login/login';
import { MetaMaskProvider } from "@metamask/sdk-react";
import './index.css';

// Create a Parent component to render both App and Login
const Main: React.FC = () => {
  return (
    <MetaMaskProvider
      debug={true}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: window.location.href,
        },
        checkInstallationImmediately: true,
        checkInstallationOnAllCalls: true,
        communicationServerUrl: "https://metamask-sdk-socket.metafi.codefi.network/",
        infuraAPIKey: process.env.INFURA_API_KEY,
        
        // Handling deeplinks
        openDeeplink: (link: string) => {
          if (canOpenLink) {
            Linking.openURL(link); // Opens the deeplink
          }
        },
      }}
    >
      <div>
        <App />
        <Login />
      </div>
    </MetaMaskProvider>
  );
};

// Render the Parent component
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Main />);
