import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./reactcomponents/AppliedRoute";
import NotFound from "./containers/NotFound";
import Home from "./containers/Home";
import Login from "./containers/Login";
import MemberSearch from "./containers/MemberSearch";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/member" exact component={MemberSearch} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;