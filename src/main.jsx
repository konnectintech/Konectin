import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TemplateProvider } from "./middleware/resume";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TemplateProvider>
    <App />
  </TemplateProvider>
);
