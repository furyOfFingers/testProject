import { ITestProps } from '../../Types/Types';
/**
 * Интерфейс блока вопроса.
 *
 * @prop {ITestProps} data Признак правильного варианта ответа на вопрос.
 * @prop {boolean} isTest Признак редактирования теста или вопроса.
 * @prop {boolean} isQuestion Признак открытия блока редактирования вопросов.
 * @prop {boolean} isOpen Признак открытия блока редактирования ответов.
 */
export interface IEditFieldReducerProps {
  data: ITestProps;
  isTest: boolean;
  isQuestion: boolean;
  isOpen: boolean;
}
