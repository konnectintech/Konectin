import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TimeAgo from "javascript-time-ago";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
