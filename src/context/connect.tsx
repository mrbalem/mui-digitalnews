import React from "react";
import { StoreContext } from "./StoreContext";

/**
 * @version 1.0.0
 * @author Rony cb cb
 * @param Component el componente a connectar los datos
 * @description este componente nos permitira realizar la conexcion de estados generales para
 * nuestras paginas o componentes
 */
const connect = (Component: React.SFC<any>) => {
  const { state, actions } = React.useContext(StoreContext);
  return <Component state={state} actions={actions} />;
};

export default connect;
