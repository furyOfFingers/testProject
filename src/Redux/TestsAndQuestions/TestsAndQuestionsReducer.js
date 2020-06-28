import { OPEN_EDIT_FIELD } from './Consts';

const initialState = {
  isTest: false,
  isQuestion: false,
  isOpen: false,
  data: {},
};

export const testsAndActionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_EDIT_FIELD:
      return {
        ...state,
        data: action.data,
        isTest: action.isTest,
        isQuestion: action.isQuestion,
        isOpen: action.isOpen,
      };
    default:
      return state;
  }
};
