/**
 *  @version 1.0.0
 *  @author Mrvalem - DigitalNews
 *  @description Manejo de sesión de usuario
 */

import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

/**
 * @description: Función para obtener validar la sesisón de usuario: CONFIGURARA A NECESIDAD
 */
export const useVerifySession = () => {
  const { state } = useContext(StoreContext);
  return state.isLogin;
};

export const useVerifySessionAdmin = () => {
  const { state } = useContext(StoreContext);
  if (state.adminToken) {
    return state.adminToken;
  } else {
    return false;
  }
};
