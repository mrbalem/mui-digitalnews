/**
 *  @version 1.0.0
 *  @author Rony - Mrvalem
 *  @description Manejo de todas las rutas privadas
 */
import React from "react";
import { verifySession } from "../utils/session";
import { Route, Redirect } from "react-router-dom";

export interface PrivateRouterProps {
  component: React.SFC<any>;
  [x: string]: any;
}

const PrivateRouter: React.SFC<PrivateRouterProps> = (props) => {
  const { component: Component, rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (verifySession()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRouter;
