import { CHANGE_PATH } from './Consts';

const initialState = {
  path: '/'
};

export const routerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PATH:
      return { ...state, path: action.payload };
    default:
      return state;
  }
};
