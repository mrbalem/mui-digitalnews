/**
 *  @version 1.0.1
 *  @author Rony cb - Mrvalem
 *  @description Manejo de todas las rutas de la aplicación
 * 	@process 3
 */

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/**
 * @description Incorporación de todas las rutas
 */
import PageIndex from "../xample/Home";
import Privacy from "../xample/Privacy";
import Terms from "../xample/Terms";
import ThemeTwo from "../xample/ThemeTwo";

const Routes = () => (
  <BrowserRouter>
    <div className="flex main">
      <div className="column full">
        <Switch>
          <Route path="/" exact component={PageIndex} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/themetwo" exact component={ThemeTwo} />
          {/* <Route component={Page404} /> */}
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
