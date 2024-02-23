import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
