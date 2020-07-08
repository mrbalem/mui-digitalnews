/**
 *  @version 1.0.0
 *  @author Rony cb - Mrvalem
 *  @description Manejo de todas las rutas restringidas
 */
import React from "react";
import { useVerifySession } from "../utils/session";
import { Route, Redirect, RouteProps } from "react-router-dom";

type RouterPropsOmit = Omit<RouteProps, "render" | "component">;

export interface RestrictRouteProps extends RouterPropsOmit {
  component: React.SFC<any>;
  redirect: string;
}

const RestrictRoute: React.SFC<RestrictRouteProps> = (props) => {
  const { component: Component, redirect, ...rest } = props;
  //[*] hoooks para verificar si existe una sessión en nuestro aplicativo
  const isLogin = useVerifySession();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogin) {
          return <Component {...props} />;
        } else {
          return <Redirect to={redirect} />;
        }
      }}
    />
  );
};

export default RestrictRoute;
