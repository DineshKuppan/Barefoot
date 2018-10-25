import React from "react";
import Loadable from "react-loadable";
// API routes
import DefaultLayout from "./containers/DefaultLayout";

//var express = require('express');
//var cors = require('cors');
//const app = express();
//app.use(cors());
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

// API routes
//require('./routes')(app);

function Loading() {
  return <div>Loading...</div>;
}

function LoadingFallBack() {
  return (
    <div>
      Content displayed when no content fetch from database - Fallback ...
    </div>
  );
}

const Forms = Loadable({
  loader: () => import("./views/Base/Forms"),
  loading: Loading
});

const Tables = Loadable({
  loader: () => import("./views/Base/Tables"),
  loading: Loading
});

const AccessServer = Loadable({
  loader: () => import("./views/Results"),
  loading: Loading
});

const Charts = Loadable({
  loader: () => import("./views/Charts"),
  loading: LoadingFallBack
});

const Dashboard = Loadable({
  loader: () => import("./views/Dashboard"),
  loading: Loading
});

const Users = Loadable({
  loader: () => import("./views/Users/Users"),
  loading: Loading
});

const Results = Loadable({
  loader: () => import("./views/Results"),
  loading: Loading
});

const User = Loadable({
  loader: () => import("./views/Users/User"),
  loading: Loading
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home", component: DefaultLayout },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/base/forms", name: "Forms", component: Forms },
  { path: "/base/tables", name: "Results", component: Tables },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
  { path: "/results", exact: true, name: "Get Results", component: Results }
];

export default routes;
