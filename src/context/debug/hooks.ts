import { useContext } from "react";
import { StoreComponent, state } from "./StoreContext";

/**
 * @description este hooks nos permite obtener el
 * estado de nuestro store
 * @interface state
 * @returns state
 */
export const useActions = (): state => {
  const { state, actions } = useContext(StoreComponent);
  return [state, actions];
};
