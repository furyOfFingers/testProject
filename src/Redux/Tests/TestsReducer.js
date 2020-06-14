import { PULL_TESTS_IN_STORE } from './Consts';

const initialState = [
  {
    title: 'какой то вопрос',
    created_at: '2020-06-13',
    id: 134,
  },
];
const actualTestsData = {};

const testsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PULL_TESTS_IN_STORE:
      console.log(action, 'action');
      // console.log(state, 'state');
      // const updateState = {...action.tests}
      return {
        ...action.tests,
        // [...answers, { ...newAnswer }]
        // title: action.tests[0].title,
        // createdAt: action.tests.createdAt,
        // id: action.tests.id,
        // title: state.title.concat([action.tests.title]),
      };
    default:
      return state;
  }
};

export default testsReducer;
