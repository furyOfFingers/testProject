import { SHOW_ERROR, HIDE_ERROR, CHANGE_ERROR_TEXT } from './Consts';

const initialState = {
  showError: false,
  errorText: 'here some kind of mstk'
};

export const layoutErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return { ...state, showLoader: true };
    case HIDE_ERROR:
      return { ...state, showLoader: false };
    case CHANGE_ERROR_TEXT:
      return { ...state, loaderText: action.payload };
    default:
      return state;
  }
};

// export default layoutErrorReducer;
