import React, { useState } from 'react';
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import { connect } from 'react-redux';
import { IAppState } from '../../../Types/Types';
import {
  signinAction,
  loginAction,
} from '../../../Redux/Authorization/AuthorizationActions';
import { changePathAction } from '../../../Redux/Router/RouterActions';
import s from './SigninPage.styl';
import Checkbox from '../../../Components/Checkbox/Checkbox';

interface ISigninPageProps {
  /** Признак отображения значения Signin или Login */
  isSigninOrLogin: boolean;
  /** Метод изменяющий path. */
  changePathAction: (path: string) => void;
  /** Метод регистрации. */
  signinAction: (formState: any) => void;
  /** Метод регистрации. */
  loginAction: (formState: any) => void;
}

const SigninPage = ({ ...props }: ISigninPageProps) => {
  const [disabled, setDisabled] = useState(true);
  const [isFieldsValidate, setisFieldsValidate] = useState({
    login: false,
    password: false,
    confirmPassword: false,
  });
  const [formState, setFormState] = useState({
    login: '',
    password: '',
    confirmPassword: '',
    checkbox: false,
  });

  /** Валидирует значения в Input при регистрации. */
  const onBlurFormValidation = () => {
    if (formState.login && formState.password && formState.confirmPassword) {
      setDisabled(false);
      // onBlurPasswordValueValidate();
      // onBlurConfirmPasswordValueValidate();
    } else {
      setDisabled(true);
    }
  };

  /** Валидирует значение поля login. */
  const onBlurLoginValueValidate = () => {
    if (formState.login) {
      setisFieldsValidate({ ...isFieldsValidate, login: false });
    } else {
      setisFieldsValidate({ ...isFieldsValidate, login: true });
    }
  };

  /** Валидирует значение поля password. */
  const onBlurPasswordValueValidate = () => {
    if (formState.password && formState.password.length > 5) {
      setisFieldsValidate({ ...isFieldsValidate, password: false });
    } else {
      setisFieldsValidate({ ...isFieldsValidate, password: true });
    }
    // onBlurConfirmPasswordValueValidate()
  };

  /** Валидирует значение поля confirmPassword. */
  const onBlurConfirmPasswordValueValidate = () => {
    if (
      formState.password &&
      formState.confirmPassword &&
      formState.password === formState.confirmPassword
    ) {
      setisFieldsValidate({ ...isFieldsValidate, confirmPassword: false });
    } else {
      setisFieldsValidate({ ...isFieldsValidate, confirmPassword: true });
    }
  };

  /**
   * Метод проверки и отправки данных формы.
   */
  const handleSubmit = () => {
    props.signinAction(formState);
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
    setisFieldsValidate({
      login: false,
      password: false,
      confirmPassword: false,
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
    onBlurFormValidation()
  };

  /** Изменяет значение checkbox. */
  const handleCheckboxChange = () => {
    setFormState({
      ...formState,
      checkbox: !formState.checkbox,
    });
  };

  /** Признак заблокированности кнопки Signin. */
  const rootDisable =
    !disabled &&
    !isFieldsValidate.login &&
    !isFieldsValidate.password &&
    !isFieldsValidate.confirmPassword
    ? false
    : true

  return (
    <div className={s['signin-page-container']}>
      <div className={s['inputs-container']}>
        <Input
          onChange={handleValueChange}
          onBlur={onBlurLoginValueValidate}
          value={formState.login}
          name='login'
          placeholder='Enter login'
        />

        <Input
          onChange={handleValueChange}
          onBlur={onBlurPasswordValueValidate}
          value={formState.password}
          error={isFieldsValidate.password}
          showHint={isFieldsValidate.password}
          hint='Min 6 symbol'
          name='password'
          type='password'
          placeholder='Enter password'
        />

        <Input
          onChange={handleValueChange}
          onBlur={onBlurConfirmPasswordValueValidate}
          value={formState.confirmPassword}
          error={isFieldsValidate.confirmPassword}
          showHint={isFieldsValidate.confirmPassword}
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
      </div>

      <div className={s['buttons-container']}>
        <Button onClick={handleRemove} theme='red' text='Cancel' />
        <Button
          disabled={rootDisable}
          onClick={handleSubmit}
          theme='green'
          text='Signin'
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

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
