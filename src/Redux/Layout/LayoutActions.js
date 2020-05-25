import { SHOW_ERROR, HIDE_ERROR, SHOW_ERROR_TEXT } from './Consts';

export function showErrorAction() {
  return {
    type: SHOW_ERROR
  };
}

export function hideErrorAction() {
  return {
    type: HIDE_ERROR
  };
}

export function showLayoutErrorAction(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ERROR_TEXT,
      text: text
    })

    setTimeout(() => {
      dispatch(hideErrorAction())
    }, 3000)
  }
}
