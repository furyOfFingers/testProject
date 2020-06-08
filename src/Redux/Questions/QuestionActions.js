import { CREATE_QUESTION, EDIT_QUESTION, DELETE_QUESTION } from './Consts';

/** Экшен на создание вопроса.
 *
 * @param {string} title Заголовок вопроса.
 * @param {string} question_type Тип вопроса.
 * @param {number} answer Номер ответа на вопрос.
 * @param {number} testId id теста, в котором создаем вопрос.
 */
export function createQuestionAction(data) {
  return {
    type: CREATE_QUESTION,
    title: data.title,
    questionType: data.questionType,
    answer: data.answer,

    testId: data.testId
  };
}

/** Экшен на редактирование вопроса.
 *
 * @param {string} title Заголовок вопроса.
 * @param {string} questionType Тип вопроса.
 * @param {string} answer Номер ответа на вопрос.
 * @param {string} questionId id вопроса.
 */
export function editQuestionAction(data) {
  return {
    type: EDIT_QUESTION,
    title: data.title,
    questionType: data.questionType,
    answer: data.answer,
    answers: data.answers,
    questionId: data.questionId
  };
}

/** Экшен на удаление вопроса.
 *
 * @param {string} id идентификатор теста.
 */
export function deleteQuestionAction(id) {
  return {
    type: DELETE_QUESTION,
    id: id
  };
}
