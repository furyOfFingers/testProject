import { CHECKED } from './Consts';

/** Экшен на изменение значения Signin или Login. */
export function checkboxAction() {
  return {
    type: CHECKED,
  };
}
