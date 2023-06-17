import {useReducer} from 'react';
import {InitialStateType} from '../types';

const initialState = {
  categoryList: [],
  dishesList: [],
  choosedCategory: null,
  choosedDish: null,
};

export default () => {
  const reducer = (state: InitialStateType, action) => {
    switch (action.type) {
      case 'ADD_CATEGORIES':
        return {
          ...state,
          categoryList: action.payload,
        };
      case 'ADD_DISHES':
        return {
          ...state,
          dishesList: action.payload,
        };
      case 'CHOOSE_CATEGORY':
        return {
          ...state,
          choosedCategory: action.payload,
        };
      case 'CHOOSED_DISH':
        return {
          ...state,
          choosedDish: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};
