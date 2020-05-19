import React from 'react';
import Button from '../../Components/Button/Button';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../../Modules/LoginPage/LoginPage';
import NavigationBar from '../Navbar/Navbar';
import {changeButtonAuth} from '../../redux/actions';
import {IAppState} from '../../Types/Types';
import s from './Layout.styl';

interface ILayoutProps {
  /** Текст кнопки. */
  text: string;
  /** Экшен изменения значения кнопки. */
  changeButtonAuth: any;
  /** Признак отображения значения Signin или Login. */
  isSigninOrLogin: boolean;
  /** Признак отображения формы авторизации. */
  isLoginForm: boolean;
}

const Layout = ({ text, ...props }: ILayoutProps) => {
  return (
    <div className={s['layout-container']}>
      <div className={s['layout-header']}>
        <span>{text}</span>
        <div>
          <Button text={!props.isSigninOrLogin ? 'Signin' : 'Login'} onClick={props.changeButtonAuth} />
        </div>
      </div>

      <div className={s['layout-body']}>
        {/* <BrowserRouter > */}
          {/* <NavigationBar /> */}
        {/* </BrowserRouter > */}
        {/* {props.isLoginForm && <LoginPage></LoginPage>} */}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  changeButtonAuth
};

const mapStateToProps = (state: IAppState) => ({
  isSigninOrLogin: state.authorization.isSigninOrLogin,
  isLoginForm: state.authorization.isLoginForm
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout);