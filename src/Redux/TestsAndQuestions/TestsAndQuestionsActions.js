import {
  OPEN_EDIT_FIELD,
} from './Consts';

/** Экшен на передачу данных при редактировании.
 *
 * @param {object} data Данные редактируемого объекта.
 */
export function openEditFieldAction(data, isTest, isQuestion) {
  return {
    type: OPEN_EDIT_FIELD,
    data: data,
    isTest: isTest,
    isQuestion: isQuestion
  };
}

// /** Экшен на передачу данных при редактировании ответов.
//  *
//  * @param {object} data Данные редактируемого объекта.
//  */
// export function elClickAction(id) {
//   return {
//     type: OPEN_EDIT_FIELD,
//     id: id,
//   };
// }
