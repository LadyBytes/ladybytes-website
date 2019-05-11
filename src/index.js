import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import App from "./App";

import "./animations.css";

ReactDOM.render(
    <LocalizeProvider>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </LocalizeProvider>,
    document.getElementById("root")
);
