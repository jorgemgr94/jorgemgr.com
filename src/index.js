import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/libs/fontawesome-free/css/all.min.css";

import "./assets/css/resume.scss";
import "./assets/css/webpage.scss";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
