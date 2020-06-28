/** @format */

import React, { createContext, useReducer, useEffect } from "react";
import { reducer, state, initialState } from "./Reducer";
import { useActions } from "./Action";
// import useDidUpdate from '../components/useDidUpdate';

interface IContextProps {
  state: state;
  actions: any;
}

const StoreContext = createContext({} as IContextProps);

interface StoreProviderProps {
  children: any;
}

const StoreProvider: React.SFC<StoreProviderProps> = (props) => {
  const { children } = props;
  // Set up reducer with useReducer and our defined reducer, initialState from reducers.js
  const [state, dispatch] = useReducer(reducer, initialState);
  // Create an object of all our actions, handling special cases where a simple dispatch is too primitive
  const actions = useActions(state, dispatch);

  const value = { state, dispatch, actions };
  // Fetch the token from storage then navigate to our appropriate place
  // Log new state
  useEffect(() => {
    console.log({ newState: state });
  }, []);

  // Render state, dispatch and special case actions
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
