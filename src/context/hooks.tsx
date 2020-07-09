import { useContext } from "react";
import { StoreContext } from "./StoreContext";
import { state } from "./Reducer";

/**
 * @description este hooks nos permite obtener el
 * estado de nuestro store
 * @interface state
 * @returns state
 */
export const useSelector = (): state => {
  const { state } = useContext(StoreContext);
  return state;
};

/**
 * @description este hooks nos permite obtener las
 * aciones de nuestro store.
 */
export const useDispatch = () => {
  const { actions } = useContext(StoreContext);
  return actions;
};
