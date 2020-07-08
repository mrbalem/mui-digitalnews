/**
 *  @version 1.0.0
 *  @author Rony cb - Mrvalem
 *  @description Punto de Entrada de la aplicación
 * 	@process 2
 */

import React from "react";
import Routes from "./routes";
import { HelmetProvider } from "react-helmet-async";
import { StoreProvider } from "./context/StoreContext";
import withRoot from "./libs/withroot";

import "./_app.style.scss";

const App = () => (
  <div className="App">
    <HelmetProvider>
      {/* Agregando StoreProvider a nuestras Rutas Generates */}
      <StoreProvider>
        <Routes />
      </StoreProvider>
    </HelmetProvider>
  </div>
);

/**
 * Agreamos Themas personalizados a nuestro Aplicativo.
 * Si deseas Agregar temas personalisados withRoot recive un parametro Thema
 * lo cual sustiuria al tema por defecto del proyecto.
 * @example
 * // theme: es el tema personalizado.
 * withRoot(theme)(App)
 */
export default withRoot()(App);
