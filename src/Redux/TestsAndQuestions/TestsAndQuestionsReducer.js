import { OPEN_EDIT_FIELD } from './Consts';

const initialState = {
  isOpen: false,
  isTest: false,
  isAnswerOpen: false,
  data: {},
};

export const testsAndActionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_EDIT_FIELD:
      return {
        ...state,
        data: action.data,
        isOpen: action.isOpen,
        isTest: action.isTest,
        isAnswerOpen: action.isAnswerOpen,
      };
    default:
      return state;
  }
};
