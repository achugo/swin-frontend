import React from "react";
import "semantic-ui-css/semantic.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./scss/style.css";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter, Redirect, Route, Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import history from "./history";

import CorporateWebsite from "./pages/corporate-website/CorporateWebsite";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={CorporateWebsite} />
    </Router>
  );
}

export default App;
