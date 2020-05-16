import React from 'react';
import { Switch, Route, Link, useHistory, useLocation } from 'react-router-dom';
import s from './Navbar.styl';
import LoginPage from '../../Modules/LoginPage/LoginPage';
import MainPage from '../../Modules/MainPage/MainPage';
import Button from '../Button';

const NavigationBar = ({}) => {
  // function MPage() {
  //   let history = useHistory();
  //   let location = useLocation();

  //   function handleClick() {
  //     console.log('history', history);
  //     console.log('location', location);
  //     history.push('/mainPage');
  //     // location.push("/mainPage");
  //   }

  //   return (
  //     <button type='button' onClick={handleClick}>
  //       mainPage
  //     </button>
  //   );
  // }

  return (
    <div className={s['navbar-container']}>
      {/* <LoginPage></LoginPage> */}

      <Switch>
        <Route path='/'>
          <LoginPage />
        </Route>

        <Route path='/mainPage'>
          <MainPage />
        </Route>

        {/* <Route path='/InputForm/InputForm'>
          <InputForm />
        </Route>

        <Route path='/ConverterPage/ConverterPage'>
          <ConverterPage />
        </Route> */}
      </Switch>
    </div>
  );
};

export default NavigationBar;
