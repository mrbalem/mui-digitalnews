/**
 *  @version 1.0.0
 *  @author Rony - Mrvalem
 *  @description Manejo de todas las rutas privadas
 */
import React from "react";
import { useVerifySessionAdmin } from "../utils/session";
import { Route, Redirect, RouteProps } from "react-router-dom";
import Paperbase from "../views/themetwo/Paperbase";

type RouterPropsOmit = Omit<RouteProps, "render" | "component">;

export interface PrivateRouterProps extends RouterPropsOmit {
  component: React.SFC<any>;
}

const PrivateRouter: React.SFC<PrivateRouterProps> = (props) => {
  const { component: Component, ...rest } = props;
  //[*] hoooks para verificar si existe una sessión en nuestro aplicativo
  const isLoginAdmin = useVerifySessionAdmin();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoginAdmin) {
          return (
            <Paperbase>
              <Component {...props} />
            </Paperbase>
          );
        } else {
          return <Redirect to="/admin/sign-in" />;
        }
      }}
    />
  );
};

export default PrivateRouter;
