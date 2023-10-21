import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TemplateProvider } from "./middleware/resume";
import "./index.css";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import { WalkthroughProvider } from "./context/WalkthroughContext";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

ReactDOM.createRoot(document.getElementById("root")).render(
  <TemplateProvider>
    <WalkthroughProvider>
      <App />
    </WalkthroughProvider>
  </TemplateProvider>
);
