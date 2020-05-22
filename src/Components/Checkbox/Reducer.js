import { CHECKED } from './Consts';

const initialState = {
  checked: false
};

const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED:
      return { ...state, isSigninOrLogin: !state.checked };
    default:
      return state;
  }
};

export default checkboxReducer;
