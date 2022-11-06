import React from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import IndexPage from "pages/home";
import LoginPage from "pages/login";
import App from "../App";

const allRoutes = [
  {
    path: "/home",
    component: IndexPage,
    exact: false,
  },
  {
    path: "/login",
    component: LoginPage,
    exact: false,
  },
];

const AppRoute = () => (
  <div>
    <HashRouter>
      <App>
        {renderRoutes(allRoutes.map((item) => ({ ...item, key: item.path })))}
      </App>
    </HashRouter>
  </div>
);

export default AppRoute;
