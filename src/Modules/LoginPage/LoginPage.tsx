import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import { connect } from 'react-redux';
import { IAppState } from '../../Types/Types';
import { signinAction, loginAction } from '../../Redux/Authorization/AuthorizationActions';
import { changePathAction } from '../../Redux/Router/RouterActions';
import s from './LoginPage.styl';
import Checkbox from "../../Components/Checkbox/Checkbox";

interface ILoginPageProps {
  /** Признак отображения значения Signin или Login */
  isSigninOrLogin: boolean;
  /** Метод изменяющий path. */
  changePathAction: (path: string) => void;
  /** Метод регистрации. */
  signinAction: (formState: any) => void;
  /** Метод регистрации. */
  loginAction: (formState: any) => void;
}

const LoginPage = ({ ...props }: ILoginPageProps) => {
  const [formState, setFormState] = useState({
    login: '',
    password: '',
    confirmPassword: '',
    checkbox: false
  });

  const [isValue, setIsValue] = useState({
    login: false,
    password: false,
    confirmPassword: false
  });

  /**
   * Метод проверки значения в инпутах.
   */
  const handleValueCheck = () => {
    setIsValue({
      ...isValue,
      login: formState.login ? false : true,
      password: formState.password ? false : true,
      confirmPassword: formState.confirmPassword ? false : true
    });
  };

  /**
   * Метод проверки и отправки данных формы.
   */
  const handleSubmit = () => {
    handleValueCheck();
    if (!props.isSigninOrLogin) {
      // if (isValue.login || isValue.password) {
        props.loginAction(formState);
      // }
    } else {
      // if (isValue.login || isValue.password || isValue.confirmPassword) {
        props.signinAction(formState);
      // }
    }
  };

  /**
   * Удаляет все введенные значения в инпуты.
   */
  const handleRemove = () => {
    setFormState({
      login: '',
      password: '',
      confirmPassword: '',
      checkbox: false
    });
    setIsValue({
      ...isValue,
      login: false,
      password: false,
      confirmPassword: false
    });
  };

  /**
   * Метод изменяющий значение инпутов формы.
   * @param {Event} event Объект инициатора события.
   */
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

const handleCheckboxChange = () => {
  setFormState({
    ...formState,
    checkbox: !formState.checkbox,
  });
}

  return (
    <div className={s['login-page-container']}>
      <div className={s['inputs-container']}>
        <Input
          onChange={handleValueChange}
          name='login'
          value={formState.login}
          placeholder='Enter login'
          error={isValue.login}
          showHint={isValue.login}
          hint='Insert Login'
        />

        <Input
          onChange={handleValueChange}
          name='password'
          value={formState.password}
          type='password'
          placeholder='Enter password'
          error={isValue.password}
          showHint={isValue.password}
          hint='Insert Password'
        />

        {props.isSigninOrLogin && (
          <>
            <Input
              onChange={handleValueChange}
              name='confirmPassword'
              value={formState.confirmPassword}
              type='password'
              placeholder='Confirm password'
              error={isValue.confirmPassword}
              showHint={isValue.confirmPassword}
              hint='Insert Password'
            />

            <Checkbox
              onChange={handleCheckboxChange}
              text='are you admin?'
              checked={formState.checkbox}
            />
          </>
        )}
      </div>

      <div className={s['buttons-container']}>
        <Button onClick={handleRemove} theme='red' text='Cancel' />
        <Button
          onClick={handleSubmit}
          theme='green'
          text={props.isSigninOrLogin ? 'Signin' : 'Login'}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  changePathAction,
  signinAction,
  loginAction,
};

const mapStateToProps = (state: IAppState) => ({
  isSigninOrLogin: state.authorization.isSigninOrLogin,
  // isLoginForm: state.authorization.isLoginForm
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
