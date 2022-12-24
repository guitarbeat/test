// import React from "react";
// import { createRoot } from "react-dom/client";
// import SurveyComponent from "./SurveyComponent";

// const root = createRoot(document.getElementById("surveyElement"));
// root.render(<SurveyComponent />);

// import "./index.css";
// import { surveyJson } from "./json";
// import SurveyComponent from "./SurveyComponent";

// ReactDOM.render(
//   <SurveyComponent surveyJson={surveyJson} />,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { surveyJson } from "./json";
import SurveyComponent from "./SurveyComponent";

ReactDOM.render(
  <SurveyComponent surveyJson={surveyJson} />,
  document.getElementById("root")
);
