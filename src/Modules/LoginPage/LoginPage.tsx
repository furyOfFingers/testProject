import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import MainPage from '../MainPage/MainPage';
import s from './LoginPage.styl';

const LoginPage = ({}) => {
  const [loginOrSignin, setoginOrSignin] = useState(false);
  const [formState, setFormState] = useState({
    login: '',
    password: '',
    confirmPassword: '',
  });

  const [isValue, setIsValue] = useState({
    login: false,
    password: false,
    confirmPassword: false,
  });

  /**
   * Метод проверки значения в инпутах.
   */
  const handleValueCheck = () => {
    setIsValue({
      ...isValue,
      login: formState.login ? false : true,
      password: formState.password ? false : true,
      confirmPassword: formState.confirmPassword ? false : true,
    });
  };

  /**
   * Метод проверки и отправки данных формы.
   */
  const handleSubmit = () => {
    handleValueCheck();
    console.log('handleCheck()', handleValueCheck());
  };

  /**
   * Удаляет все введенные значения в инпуты.
   */
  const handleRemove = () => {
    setFormState({
      login: '',
      password: '',
      confirmPassword: '',
    });
    setIsValue({
      ...isValue,
      login: false,
      password: false,
      confirmPassword: false,
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

        {loginOrSignin && (
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
        )}
      </div>

      <div className={s['buttons-container']}>
        <Button onClick={handleRemove} theme='red' text='Cancel' />

        <Button
          onClick={handleSubmit}
          theme='green'
          text={loginOrSignin ? 'Submit and Signin' : 'Submit and Login'}
        />

        <Button
          onClick={() => setoginOrSignin(!loginOrSignin)}
          text={loginOrSignin ? 'Log in' : 'Sign in'}
        />
      </div>
    </div>
  );
};

export default LoginPage;
