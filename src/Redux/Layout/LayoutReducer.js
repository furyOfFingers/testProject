import { SHOW_ERROR, HIDE_ERROR, SHOW_ERROR_TEXT } from './Consts';

const initialState = {
  errorText: null
};

export const layoutErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_ERROR:
      return { ...state, errorText: null };
    case SHOW_ERROR_TEXT:
      return { ...state, errorText: action.text };
    default:
      return state;
  }
};

// export default layoutErrorReducer;
