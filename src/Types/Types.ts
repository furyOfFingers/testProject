
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
 * @prop {string} title Вопрос.
 * @prop {string} createdAt Дата создания вопроса.
 * @prop {number} id Идентификатор вопроса.
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
  };
  test: {
    title: string;
    id: number;
    createdAt: string
  }
}
/**
 * Интерфейс блока вопроса.
 *
 * @prop {boolean} isAnswer Признак правильного варианта ответа на вопрос.
 * @prop {boolean} versionAnswer Вариант ответа на вопрос.
 * @prop {boolean} isEdit Признак возможности редактирования варианта овтета.
 * @prop {boolean} isEmptyOption Признак пустого поля варианта ответа.
 * @prop {number} questionId Идентификатор вопроса, в который добавляем вариант ответа.
 */
export interface IAnswerProps {
  isAnswer: boolean;
  versionAnswer: string;
  isEdit: boolean;
  isEmptyOption: boolean;
  questionId: number
}

// /**
//  * Модель ветки редакс-стейта модуля работы с пользователем.
//  *
//  * @prop {IAsyncData<IUser>} user Данные пользователя.
//  */
// export interface IUserInfoReduxState {
//   user: IAsyncData<IUser>;
// }