/**
 *  @version 1.0.0
 *  @author Rony - Mrvalem
 *  @description Manejo de todas las rutas privadas
 */
import React from "react";
import { useVerifySession } from "../utils/session";
import { Route, Redirect, RouteProps } from "react-router-dom";

type RouterPropsOmit = Omit<RouteProps, "render" | "component">;

export interface PrivateRouterProps extends RouterPropsOmit {
  component: React.SFC<any>;
}

const PrivateRouter: React.SFC<PrivateRouterProps> = (props) => {
  const { component: Component, ...rest } = props;
  //[*] hoooks para verificar si existe una sessión en nuestro aplicativo
  const isLogin = useVerifySession();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogin) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/sign-in" />;
        }
      }}
    />
  );
};

export default PrivateRouter;
