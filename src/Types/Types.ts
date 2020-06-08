import {
  ACTION_REVERT_ALL_FIELD,
  ACTION_CHANGE_FIRST_NAME,
  ACTION_CHANGE_SECOND_NAME
} from '../consts';

/** Interface полей компонента App. */
export interface IFieldState {
  firstName: any;
  secondName: any;
};

/** Interface для action поля firstName. */
export interface IFirstNameProps {
  type: typeof ACTION_CHANGE_FIRST_NAME;
  payload: IFieldState;
};

/** Interface для action поля secondName. */
export interface ISecondNameProps {
  type: typeof ACTION_CHANGE_SECOND_NAME;
  payload: IFieldState;
};

/** Interface для action снопки "Cancel". */
export interface InitialState {
  type: typeof ACTION_REVERT_ALL_FIELD;
  payload: IFieldState;
};

export type IFieldActionTypes = IFirstNameProps | ISecondNameProps | InitialState;

/**
 * Модель ветки редакс-стейта модуля работы с пользователем.
 *
 * @prop {boolean} isSigninOrLogin Признак отображения значения Signin или Login.
 * @prop {boolean} isLoginForm Признак отображения формы авторизации.
 * @prop {boolean} isAuth Признак авторизации.
 * @prop {boolean} showLoader Признак отрисовки лоадера.
 * @prop {string} loaderText Текст лоадера.
 * @prop {string} errorText Текст ошибки компонента layout.
 * @prop {boolean} showError Признак отображения ошибки компонента layout.
 * @prop {boolean} isAdmin Признак наличия прав администратора.
 */
export interface IAppState {
  authorization: {
    isSigninOrLogin: boolean
    isLoginForm: boolean;
    isAuth: boolean;
    isAdmin: boolean;
  };
  loader: {
    showLoader: boolean,
    loaderText: string
  };
  layout: {
    errorText: string;
    showError: boolean;
  }
}
/**
 * Интерфейс блока вопроса.
 *
 * @prop {boolean} answer Признак правильного варианта ответа на вопрос.
 * @prop {boolean} versionAnswer Вариант ответа на вопрос.
 * @prop {boolean} isEdit Признак возможности редактирования варианта овтета.
 */
export interface IQuestionProps {
  answer: boolean;
  versionAnswer: string;
  isEdit: boolean;
}

// /**
//  * Модель ветки редакс-стейта модуля работы с пользователем.
//  *
//  * @prop {IAsyncData<IUser>} user Данные пользователя.
//  */
// export interface IUserInfoReduxState {
//   user: IAsyncData<IUser>;
// }