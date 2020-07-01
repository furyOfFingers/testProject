import { OPEN_EDIT_FIELD } from './Consts';

const initialState = {
  isTest: false,
  isQuestion: false,
  actualId: 0,
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
      };
    // case OPEN_EDIT_FIELD:
    //   return {
    //     ...state,
    //     actualId: action.id,
    //   };
    default:
      return state;
  }
};
