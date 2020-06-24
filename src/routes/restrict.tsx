/**
 *  @version 1.0.0
 *  @author Rony cb - Mrvalem
 *  @description Manejo de todas las rutas restringidas
 */
import React from "react";
import { verifySession } from "../utils/session";
import { Route, Redirect } from "react-router-dom";

export interface RestrictRouteProps {
  component: React.SFC<any>;
  [rest: string]: any;
}

const RestrictRoute: React.SFC<RestrictRouteProps> = (props) => {
  const { component: Component, rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (verifySession()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/404" />;
        }
      }}
    />
  );
};

export default RestrictRoute;
