import React, {createContext} from 'react';
import RootNavigation from './src/navigation';
import useAppReducer from './src/hooks/useAppReducer';
import {InitialStateType} from './src/types';

const initialState = {
  categoryList: [],
  dishesList: [],
  choosedCategory: null,
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const App = () => {
  const {state, dispatch} = useAppReducer();

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <RootNavigation />
    </AppContext.Provider>
  );
};

export default App;
