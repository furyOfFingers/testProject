
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
 * @prop {boolean} isOpen Признак открытия блока редактирования.
 * @prop {boolean} isTest Признак редактирования теста или вопроса.
 * @prop {boolean} data Данные редактируемого элемента.
 * @prop {boolean} isAnswerOpen Признак открытия блока редактирования ответов.
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
  };
  testsAndQuestions: {
    isOpen: boolean;
    isTest: boolean;
    isAnswerOpen: boolean;
    data: any
  }
}

/**
 * Интерфейс блока вопроса.
 *
 * @prop {boolean} isAnswer Признак правильного варианта ответа на вопрос.
 * @prop {boolean} versionAnswer Вариант ответа на вопрос.
 * @prop {boolean} isEdit Признак возможности редактирования варианта ответа.
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

/**
 * Интерфейс теста.
 *
 * @prop {number} id Идентификатор теста.
 * @prop {string} createdAt Дата создания теста.
 * @prop {string} title Наименование теста.
 * @prop {IQuestionsProps} questions Массив вопросов.
 */
export interface ITestProps {
  id: number;
  createdAt: string;
  title: string;
  questions: IQuestionProps;
}

/**
 * Интерфейс вопроса.
 *
 * @prop {number} id Идентификатор вопроса.
 * @prop {string} createdAt Дата создания вопроса.
 * @prop {string} title Наименование вопроса.
 * @prop {IQuestionsProps} questions Массив вопросов.
 */
export interface IQuestionProps {
  id: number;
  createdAt: string;
  title: string;
  questionType: 'single' | 'number' | 'multiple';
}

/**
 * Интерфейс вопроса.
 *
 * @prop {number} id Идентификатор вопроса.
 * @prop {string} createdAt Дата создания вопроса.
 * @prop {string} title Наименование вопроса.
 * @prop {IQuestionsProps} questions Массив вопросов.
 */
export interface IAnswerTypeProps {
  id: number;
  createdAt: string;
  title: string;
  questionType: IAnswerProps;
}

// /**
//  * Модель ветки редакс-стейта модуля работы с пользователем.
//  *
//  * @prop {IAsyncData<IUser>} user Данные пользователя.
//  */
// export interface IUserInfoReduxState {
//   user: IAsyncData<IUser>;
// }