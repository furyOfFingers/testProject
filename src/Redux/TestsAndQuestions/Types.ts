import { ITestProps } from '../../Types/Types';
/**
 * Интерфейс блока вопроса.
 *
 * @prop {ITestProps} data Признак правильного варианта ответа на вопрос.
 * @prop {boolean} isOpen Признак открытия блока редактирования тестов или вопросов.
 * @prop {boolean} isTest Признак редактирования теста или вопроса.
 * @prop {boolean} isAnswerOpen Признак открытия блока редактирования ответов.
 */
export interface IEditFieldReducerProps {
  data: ITestProps;
  isOpen: boolean;
  isTest: boolean;
  isAnswerOpen: boolean;
}
