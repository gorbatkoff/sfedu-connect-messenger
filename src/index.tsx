import { StrictMode } from "react";

import ReactDOM from "react-dom/client";

import { App } from "./app/App";
import { StoreProvider } from "./app/providers/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
