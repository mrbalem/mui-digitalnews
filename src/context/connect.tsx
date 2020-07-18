import React from "react";
import { StoreContext } from "./StoreContext";
import { state } from "./Reducer";
import { RouteComponentProps } from "react-router-dom";
import { IActions } from "./Action";

export interface WithRootConnet extends RouteComponentProps {
  /**
   * Recivimos los estados de StoreContext
   */
  state: state;
  /**
   * Establecemos las accion para nuestro componentes
   */
  actions: IActions;
}

/**
 * @version 1.0.0
 * @author Rony cb cb
 * @param Component el componente a connectar los datos
 * @description este componente nos permitira realizar la conexcion de estados generales para
 * nuestras paginas o componentes
 */

const connect = (Component: React.FC<WithRootConnet>) => {
  /**
   * @interface RouteComponentProps contiene history, location y match props
   * @param props recuperamos los valores de la interface y se lo pasamos a nuestro componente.
   * @description Esta Componente nos permite Recuperar los props de react router dom y pasarselo
   * a nuestro componente conectado.
   */
  const Connect: React.FC<RouteComponentProps> = (props) => {
    /**
     * recuperamos los estados y actions de nuestro Store Context
     */
    const { state, actions } = React.useContext(StoreContext);
    return <Component state={state} actions={actions} {...props} />;
  };
  return Connect;
};

export default connect;
