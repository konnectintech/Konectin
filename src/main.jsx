import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import TimeAgo from "javascript-time-ago";

import { CVProvider } from "./middleware/cv";
import { TemplateProvider } from "./middleware/resume";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

ReactDOM.createRoot(document.getElementById("root")).render(
  <TemplateProvider>
    <CVProvider>
     <App />
    </CVProvider>
  </TemplateProvider>
);
