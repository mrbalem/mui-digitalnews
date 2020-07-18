/** @format */

import React, { createContext, useReducer, useEffect } from "react";

interface IContextProps {
  state: any;
  actions: any;
}

//[*] create soter context
const StoreComponent = createContext({} as IContextProps);

export interface state {
  [key: string]: any;
}

interface StoreProviderCPProps {
  children: React.ReactNode;
  initialState: any;
  reducer: (state: any, action: any) => state;
  actions: (state: any, dispatch: any) => void;
}

const StoreProviderCP: React.FC<StoreProviderCPProps> = (props) => {
  const { children, actions: useActions, reducer, initialState } = props;

  // Set up reducer with useReducer and our defined reducer, initialState from reducers.js
  const [state, dispatch] = useReducer(reducer, initialState);
  // Create an object of all our actions, handling special cases where a simple dispatch is too primitive
  const actions = useActions(state, dispatch);

  const value = { state, dispatch, actions };
  // also debuggin develoment state, remove for production.
  useEffect(() => {
    console.log("store libre", { newState: state });
  }, [state]);

  // Render state, dispatch and special case actions
  return (
    <StoreComponent.Provider value={value}>{children}</StoreComponent.Provider>
  );
};

export { StoreComponent, StoreProviderCP };
