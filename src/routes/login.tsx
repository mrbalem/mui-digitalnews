/**
 *  @version 1.0.0
 *  @author Rony - Mrvalem
 *  @description Manejo de todas las rutas privadas
 */
import React from "react";
import { useVerifySessionAdmin } from "../utils/session";
import { Route, Redirect, RouteProps } from "react-router-dom";

type RouterPropsOmit = Omit<RouteProps, "render" | "component">;

export interface LoginRouteProps extends RouterPropsOmit {
  component: React.SFC<any>;
}

const LoginRoute: React.SFC<LoginRouteProps> = (props) => {
  const { component: Component, ...rest } = props;
  //[*] hoooks para verificar si existe una sessión en nuestro aplicativo
  const loginAdminToken = useVerifySessionAdmin();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!loginAdminToken) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={"/admin/home?page=almacen&user=" + loginAdminToken} />
          );
        }
      }}
    />
  );
};

export default LoginRoute;
