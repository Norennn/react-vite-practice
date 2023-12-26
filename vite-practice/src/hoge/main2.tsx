import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./Hoge";
import "./index.css";
import "./TodoApp.css";

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
