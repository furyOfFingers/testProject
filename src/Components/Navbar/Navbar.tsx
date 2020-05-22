import React from 'react';
import { Switch, BrowserRouter, Router, Route, Link, useHistory, useLocation } from 'react-router-dom';
import s from './Navbar.styl';
import LoginPage from '../../Modules/LoginPage/LoginPage';
import MainPage from '../../Modules/MainPage/MainPage';
import Button from '../Button';
import { IAppState } from 'Types/Types';
import { connect } from 'react-redux';
import Layout from "../Layout/Layout";
import history from "../../Store/History";

const NavigationBar = ({ ...props }) => {
  return (
    <BrowserRouter >
      <div className={s['navbar-container']}>
        <Layout text='welcome, потом переделать на смену в зависимости от логирования'></Layout>
        <Switch>
          <Route exact path='/'>
            {props.isLoginForm && <LoginPage></LoginPage>}
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
    </BrowserRouter>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: IAppState) => ({
  isLoginForm: state.authorization.isLoginForm,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
