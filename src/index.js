import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/AuthContext";
import { NotificationContextProvider } from "./context/NotificationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <NotificationContextProvider>
        <App />
      </NotificationContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
