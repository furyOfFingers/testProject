import {
  OPEN_EDIT_FIELD,
} from './Consts';

/** Экшен на передачу данных при редактировании.
 *
 * @param {object} data Данные редактируемого объекта.
 */
export function openEditFieldAction(data, isOpen, isTest, isAnswerOpen) {
  return {
    type: OPEN_EDIT_FIELD,
    data: data,
    isOpen: isOpen,
    isTest: isTest,
    isAnswerOpen: isAnswerOpen
  };
}