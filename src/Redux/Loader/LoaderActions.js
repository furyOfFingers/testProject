import { SHOW_LOADER, HIDE_LOADER, CHANGE_LOADER_TEXT } from './Consts';

export function showLoaderAction() {
  return {
    type: SHOW_LOADER
  };
}

export function hideLoaderAction() {
  return {
    type: HIDE_LOADER
  };
}

export function loaderTextAction(text) {
  return {
    type: CHANGE_LOADER_TEXT,
    text: text
  };
}
