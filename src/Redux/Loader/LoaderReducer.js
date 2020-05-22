import { SHOW_LOADER, HIDE_LOADER, CHANGE_LOADER_TEXT } from '../types';

const initialState = {
  showLoader: false,
  loaderText: 'Loading...'
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, showLoader: true };
    case HIDE_LOADER:
      return { ...state, showLoader: false };
    case CHANGE_LOADER_TEXT:
      return { ...state, loaderText: action.payload };
    default:
      return state;
  }
};
