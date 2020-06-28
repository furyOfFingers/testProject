import { PULL_TESTS_IN_STORE } from './Consts';

const initialState = [
  // {
  //   id: 340,
  //   title: 'new question with option adder function',
  //   question_type: 'single',
  //   answers: [
  //     { id: 176, text: 'new option 1', is_right: false },
  //     { id: 177, text: 'new option 2', is_right: false },
  //     { id: 178, text: 'new option 3', is_right: true },
  //     { id: 179, text: 'new option 4', is_right: false },
  //   ],
  //   amswer: 1,
  //   created_at: '2020-06-13',
  // },
];
const actualTestsData = {};

const testsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PULL_TESTS_IN_STORE:
      return {
        ...action.tests,
      };
    default:
      return state;
  }
};

export default testsReducer;
