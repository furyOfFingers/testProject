import { SHOW_ERROR, HIDE_ERROR, CHANGE_ERROR_TEXT } from './Consts';

export function showErrorAction() {
  return {
    type: SHOW_LOADER
  };
}

export function hideErrorAction() {
  return {
    type: HIDE_LOADER
  };
}

export function errorTextAction(text) {
  return {
    type: CHANGE_LOADER_TEXT,
    text: text
  };
}
