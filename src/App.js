import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./scss/style.css";
import "./App.css";
import Layout from "./components/layout/Layout";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter, Redirect, Route, Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import history from "./history";
import Login from "./pages/auth/login/Login";
import LandingPage from "./pages/landing-page/LandingPage";
import Register from "./pages/auth/register/register";
import CompleteRegister from "./pages/auth/register/complete";
import CorporateWebsite from "./pages/corporate-website/CorporateWebsite";
import SoftwareDetails1 from "./pages/product-details";
import ProductDetail from "./pages/landing-page/ProductDetail";

function App() {
  return (
    <Router history={history}>
      <Route
        exact
        path="/"
        render={() =>
          localStorage.getItem("token") ? (
            <Redirect to="/dashboard" />
          ) : (
            <LandingPage />
          )
        }
      />
      {/* <Route exact path="/softwares" component={LandingPage} /> */}
      <Route path="/softwares/:id" component={ProductDetail} />
      <Route exact path="/about" component={CorporateWebsite} />
      <Route
        path="/dashboard"
        render={() =>
          localStorage.getItem("token") ? <Layout /> : <Redirect to="/login" />
        }
      />
      <Route path="/register" component={Register} />
      <Route path="/complete-registration/:id" component={CompleteRegister} />
      <Route path="/login" component={Login} />

      {/* <Route
          path="/login"
          render={() => (secureStorage.getItem("token") ? <Home /> : <Login />)}
        />

        <Route
          path="/register"
          render={() =>
            secureStorage.getItem("token") ? <Home /> : <Register />
          }
        /> */}
    </Router>
  );
}

export default App;
