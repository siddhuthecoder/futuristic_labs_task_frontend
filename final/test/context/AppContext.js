import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  components: [],
  selectedComponent: null,
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addComponent = (component) => {
    dispatch({ type: 'ADD_COMPONENT', payload: component });
  };

  const updateComponent = (updatedComponent) => {
    dispatch({ type: 'UPDATE_COMPONENT', payload: updatedComponent });
  };

  const selectComponent = (component) => {
    dispatch({ type: 'SELECT_COMPONENT', payload: component });
  };

  return (
    <AppContext.Provider value={{
      components: state.components,
      selectedComponent: state.selectedComponent,
      addComponent,
      updateComponent,
      selectComponent
    }}>
      {children}
    </AppContext.Provider>
  );
};
