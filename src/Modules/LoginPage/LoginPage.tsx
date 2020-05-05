import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ErrorLog from '../../Components/ErrorLog/ErrorLog';
import './LoginPageStyle.css';

const LoginPage = ({}) => {
  const [loginOrSignin, setoginOrSignin] = useState(false);
  const [formState, setFormState] = useState({
    login: "",
    password: "",
    confirmPassword: ""
  });

  const [isValue, setIsValue] = useState({
    login: false,
    password: false,
    confirmPassword: false
  });

  // const isPasswordSame = () => {
  //   if(confirmPassword) {
  //     if (password !== confirmPassword) return "Check password entry"
  //   } else {
  //     return "Insert Password"
  //   }
  // }

  /**
   * Метод проверки значения в инпутах.
   */
  const handleValueCheck = () => {
    setIsValue({
      ...isValue,
      login: formState.login ? false : true,
      password: formState.password ? false : true,
      confirmPassword: formState.confirmPassword ? false : true
    })
  }

  /**
   * Метод проверки и отправки данных формы.
   */
  const handleSubmit = () => {
    handleValueCheck()
    // isPasswordSame()
    console.log('handleCheck()', handleValueCheck())
    window.location.href = '/MainPage/MainPage.tsx';

  }

  /**
   * Удаляет все введенные значения в инпуты.
   */
  const handleRemove = () => {
    setFormState({
      login: "",
      password: "",
      confirmPassword: ""
    })
  }

  /**
   * Метод изменяющий значение инпутов формы.
   * @param {Event} event Объект инициатора события.
   */
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({...formState, [event.currentTarget.name]: event.currentTarget.value})
  }

  return (
    <Form className='col-lg-3 container login-page-container'>
      <Form.Group controlId='formLogin'>
        <Form.Control
          onChange={handleValueChange}
          name="login"
          value={formState.login}
          type='text'
          placeholder='Enter login'
        />
        <ErrorLog showError={isValue.login} text="Insert Login"/>
      </Form.Group>

      <Form.Group controlId='formPassword'>
        <Form.Control
          onChange={handleValueChange}
          name="password"
          value={formState.password}
          type='password'
          placeholder='Enter password'
        />
        <ErrorLog showError={isValue.password} text="Insert Password"/>

        {loginOrSignin &&
          <>
            <Form.Control
              onChange={handleValueChange}
              name="confirmPassword"
              value={formState.confirmPassword}
              type='password'
              placeholder='Confirm password'
            />
            <ErrorLog showError={isValue.confirmPassword} text="Insert Password"/>
          </>
        }
      </Form.Group>

      <Form.Group className="buttons-container" controlId='formButtons'>
        <Button onClick={handleRemove} variant="outline-danger">Cancel</Button>

        <Button onClick={handleSubmit} variant="outline-success">{loginOrSignin ? "Submit and Sign in" : "Submit and Log in"}</Button>

        <Button onClick={() => setoginOrSignin(!loginOrSignin)} variant="light">{loginOrSignin ? "Log in" : "Sign in"}</Button>
      </Form.Group>
    </Form>
  );
};

export default LoginPage;
