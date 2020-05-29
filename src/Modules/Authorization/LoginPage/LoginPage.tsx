import React, { useState } from 'react';
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import { connect } from 'react-redux';
import { IAppState } from '../../../Types/Types';
import { loginAction } from '../../../Redux/Authorization/AuthorizationActions';
import s from './LoginPage.styl';

interface ILoginPageProps {
  /** Признак отображения значения Signin или Login */
  isSigninOrLogin: boolean;
  /** Метод регистрации. */
  signinAction: (formState: any) => void;
  /** Метод регистрации. */
  loginAction: (formState: any) => void;
}

const LoginPage = ({ ...props }: ILoginPageProps) => {
  const [disabled, setDisabled] = useState(true);
  const [formState, setFormState] = useState({
    login: '',
    password: ''
  });

  /** Проверяет значение полей. */
  const onBlurFieldsCheck = () => {
    if (formState.login && formState.password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  /**
   * Метод отправки данных.
   */
  const handleSubmit = () => {
    props.loginAction(formState);
  };

  /**
   * Удаляет все введенные значения в инпуты.
   */
  const handleRemove = () => {
    setFormState({
      login: '',
      password: '',
    });
    setDisabled(true);
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

  return (
    <div className={s['login-page-container']}>
      <div>
        <Input
          onChange={handleValueChange}
          onBlur={onBlurFieldsCheck}
          value={formState.login}
          name='login'
          placeholder='Enter login'
        />

        <Input
          onChange={handleValueChange}
          onBlur={onBlurFieldsCheck}
          value={formState.password}
          name='password'
          type='password'
          placeholder='Enter password'
        />
      </div>

      <div className={s['buttons-container']}>
        <Button onClick={handleRemove} theme='red' text='Cancel' />
        <Button
          disabled={disabled}
          onClick={handleSubmit}
          theme='green'
          text='Login'
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loginAction
};

const mapStateToProps = (state: IAppState) => ({
  isSigninOrLogin: state.authorization.isSigninOrLogin,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
