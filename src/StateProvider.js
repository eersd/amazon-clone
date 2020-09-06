import React, { createContext,useContext, useReducer } from "react";

// Data Layer
export const StateContext = createContext();

// Build Provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}> 
         {children}
    </StateContext.Provider>
);

// How to use inside a component
export const useStateValue = () => useContext(StateContext);