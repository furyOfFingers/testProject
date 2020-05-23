import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import { connect } from 'react-redux';
import { IAppState } from '../../Types/Types';
import {
  signinAction,
  loginAction,
} from '../../Redux/Authorization/AuthorizationActions';
import { changePathAction } from '../../Redux/Router/RouterActions';
import s from './LoginPage.styl';
import Checkbox from '../../Components/Checkbox/Checkbox';

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
  const [disabled, setDisabled] = useState(true);
  const [isPasswordsFieldSOk, setisPasswordsFieldSOk] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formState, setFormState] = useState({
    login: '',
    password: '',
    confirmPassword: '',
    checkbox: false,
  });


  /**
   * Метод проверки значения в Input.
   */
  const onBlurValueCheck = () => {
    if (!props.isSigninOrLogin) {
      if (formState.login && formState.password) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    } else {
      if (formState.login && formState.password && formState.confirmPassword) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }

    if(props.isSigninOrLogin) {
      onBlurPassConfirmCheck();
      // onBlurHandlePassMinValueCheck();
    }
  };

  /** Проверяет поле password на минимальное количество символов. */
  const onBlurHandlePassMinValueCheck = () => {
    if(formState.password.length < 6) {
      setDisabled(false);
      setisPasswordsFieldSOk({...isPasswordsFieldSOk, password: false});
    } else {
      setDisabled(true);
      setisPasswordsFieldSOk({...isPasswordsFieldSOk, password: true});
    }
  }

  /** Проверяет поля password и confirmPassword на схожесть. */
  const onBlurPassConfirmCheck = () => {
    if(formState.login && formState.password && formState.confirmPassword) {
      if(formState.password === formState.confirmPassword) {
        setDisabled(false);
        setisPasswordsFieldSOk({...isPasswordsFieldSOk, confirmPassword: false});
      } else {
        setDisabled(true);
        setisPasswordsFieldSOk({...isPasswordsFieldSOk, confirmPassword: true});
      }
    }
  }

  /**
   * Метод проверки и отправки данных формы.
   */
  const handleSubmit = () => {
    if (!props.isSigninOrLogin) {
      props.loginAction(formState);
    } else {
      props.signinAction(formState);
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
      checkbox: false,
    });
    setisPasswordsFieldSOk({...isPasswordsFieldSOk, confirmPassword: false})
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
    onBlurValueCheck();
  };

  /** Изменяет значение checkbox. */
  const handleCheckboxChange = () => {
    setFormState({
      ...formState,
      checkbox: !formState.checkbox,
    });
  };

  return (
    <div className={s['login-page-container']}>
      <div className={s['inputs-container']}>
        <Input
          onChange={handleValueChange}
          onBlur={onBlurValueCheck}
          value={formState.login}
          name='login'
          placeholder='Enter login'
        />

        <Input
          onChange={handleValueChange}
          onBlur={onBlurValueCheck}
          value={formState.password}
          error={isPasswordsFieldSOk.password}
          showHint={isPasswordsFieldSOk.password}
          hint='Min 6 symbol'
          name='password'
          type='password'
          placeholder='Enter password'
        />

        {props.isSigninOrLogin && (
          <>
            <Input
              onChange={handleValueChange}
              onBlur={onBlurPassConfirmCheck}
              value={formState.confirmPassword}
              error={isPasswordsFieldSOk.confirmPassword}
              showHint={isPasswordsFieldSOk.confirmPassword}
              hint='Password mismatch'
              name='confirmPassword'
              type='password'
              placeholder='Confirm password'
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
          disabled={disabled}
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
