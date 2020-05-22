
// /** Interface полей компонента App. */
// export interface IFieldState {
//   firstName: any;
//   secondName: any;
// };

// /** Interface для action поля firstName. */
// export interface IFirstNameProps {
//   type: typeof ACTION_CHANGE_FIRST_NAME;
//   payload: IFieldState;
// };

// /** Interface для action поля secondName. */
// export interface ISecondNameProps {
//   type: typeof ACTION_CHANGE_SECOND_NAME;
//   payload: IFieldState;
// };

// /** Interface для action снопки "Cancel". */
// export interface InitialState {
//   type: typeof ACTION_REVERT_ALL_FIELD;
//   payload: IFieldState;
// };

// export type IFieldActionTypes = IFirstNameProps | ISecondNameProps | InitialState;

/**
 * Модель ветки редакс-стейта модуля работы с пользователем.
 *
 * @prop {boolean} isSigninOrLogin Признак отображения значения Signin или Login.
 */
export interface IAppState {
  authorization: {
    isSigninOrLogin: boolean
    isLoginForm: boolean;
    isAuth: boolean;
  };
  loader: {
    showLoader: boolean,
    loaderText: string
  };
  layout:{
    errorText: string;
    showError: boolean;
  }
}

// /**
//  * Модель ветки редакс-стейта модуля работы с пользователем.
//  *
//  * @prop {IAsyncData<IUser>} user Данные пользователя.
//  */
// export interface IUserInfoReduxState {
//   user: IAsyncData<IUser>;
// }