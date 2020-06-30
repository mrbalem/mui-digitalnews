import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/**
 * @description Incorporación de todas las rutas
 */
import { HomeGirdMall, RegisterGridMall } from "../zviewsgridmall";
import Privacy from "../xample/Privacy";
import Terms from "../xample/Terms";
import ThemeTwo from "../xample/ThemeTwo";
import Prueba from "../zviewsgridmall/prueba";
import { HomeNevado, SignInNevado } from "../zviewsnevado";
//import PrivateRouter from "./private";

/**
 * @version 1.0.1
 * @author Rony cb - Mrvalem
 * @description Manejo de todas las rutas de la aplicación
 * @process 3
 * @warning [!] por favor reemplace estas rutas con example o cree sus propias vistas para
 * implementarlo.
 * @example import {Home, ...etc} from '../xample/
 */

const Routes = () => (
  <BrowserRouter>
    <div className="flex main">
      <div className="column full">
        <Switch>
          <Route path="/" exact component={HomeNevado} />
          <Route path="/register/:id" exact component={RegisterGridMall} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/prueba" exact component={Prueba} />
          <Route path="/sign-in" exact component={SignInNevado} />
          <Route path="/themetwo" exact component={ThemeTwo} />
          {/* <Route component={Page404} /> */}
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
