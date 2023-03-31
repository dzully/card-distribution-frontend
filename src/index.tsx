import * as Sentry from "@sentry/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Initialize Sentry for error reporting and performance monitoring
Sentry.init({
  dsn: "https://d8a903d4e93e429d8fe52992e44dd357@o1106769.ingest.sentry.io/4504931867230208",
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
