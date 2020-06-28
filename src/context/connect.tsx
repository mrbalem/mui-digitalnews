import React from "react";
import { StoreContext } from "./StoreContext";
import { state } from "./Reducer";

/**
 * @version 1.0.0
 * @author Rony cb cb
 * @param Component el componente a connectar los datos
 * @description este componente nos permitira realizar la conexcion de estados generales para
 * nuestras paginas o componentes
 */

export interface WithRootProps {
  /**
   * Recivimos los estados del Reducer
   */
  state: state;
  /**
   * Establecemos las accion para nuestro componentes
   */
  actions: any;
  /**
   * Permitimos props personalisados para nuectro Component
   */
  [key: string]: any;
}

const connect = (Component: React.SFC<WithRootProps>) => {
  /**
   * @param props Contiene el histirial de rutas y los pasamos a nuestro componente.
   * @description Retornamos un componente SFC para no tener confictos con React.Router
   */
  const Connect: React.SFC<any> = (props) => {
    /**
     * recuperamos los estados y actions de nuestro Store Context
     */
    const { state, actions } = React.useContext(StoreContext);
    return <Component state={state} actions={actions} {...props} />;
  };
  return Connect;
};

export default connect;
