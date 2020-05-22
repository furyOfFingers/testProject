import React from 'react';
import Button from '../../Components/Button/Button';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../../Modules/LoginPage/LoginPage';
import NavigationBar from '../Navbar/Navbar';
import { changeButtonAuthAction, logoutAction } from '../../Redux/Authorization/AuthorizationActions';
import { IAppState } from '../../Types/Types';
import s from './Layout.styl';
import MainRouter from '../../Router/MainRouter';

interface ILayoutProps {
  /** Текст кнопки. */
  text: string;
  /** Экшен изменения значения кнопки. */
  changeButtonAuthAction: any;
  /** Экшен выхода пользователя из учетной записи. */
  logoutAction: any;
  /** Признак отображения значения Signin или Login. */
  isSigninOrLogin: boolean;
  /** Признак отображения формы авторизации. */
  isLoginForm: boolean;
  /** Признак авторизации. */
  isAuth: boolean;
  /** Текст ошибки. */
  errorText?: string;
  /** Признак отображения ошибки. */
  showError: boolean;
  /** Признак отображения лоадера. */
  showLoader: boolean,
  /** Текст отображающийся в лоайдере. */
  loaderText: string
}

const Layout = ({ text, ...props }: ILayoutProps) => {
  return (
    <div className={s['layout-container']}>
      <div className={s['layout-header']}>
        <span>{text}</span>

        <div>
          <Button
            text={!props.isSigninOrLogin ? 'Signin' : 'Login'}
            onClick={
              // props.isAuth ?
              props.changeButtonAuthAction 
              // props.logoutAction
            }
          />
        </div>
      </div>

      {props.showError &&
        <div className={s['layout-header-error']}>
          <span>{props.errorText}</span>
        </div>
      }

      {props.showLoader &&
        <div className={s['layout-loader']}>
          <span>
            {props.loaderText}
          </span>
        </div>
      }

      <div className={s['layout-body']}>
        <MainRouter></MainRouter>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  changeButtonAuthAction,
  logoutAction
};

const mapStateToProps = (state: IAppState) => ({
  isSigninOrLogin: state.authorization.isSigninOrLogin,
  isLoginForm: state.authorization.isLoginForm,
  isAuth: state.authorization.isAuth,
  showLoader: state.loader.showLoader,
  loaderText: state.loader.loaderText,
  errorText: state.layout.errorText,
  showError: state.layout.showError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
