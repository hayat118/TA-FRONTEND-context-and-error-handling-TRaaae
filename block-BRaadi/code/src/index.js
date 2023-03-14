import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
// import ErrorBoundary2 from "./components/ErrorBoundary2";

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById("root")
);
