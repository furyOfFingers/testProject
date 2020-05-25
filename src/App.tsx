import React from 'react';
import LoginPage from './Modules/Authorization/LoginPage/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Button from './Components/Button/Button';
import Layout from './Components/Layout/Layout';
import Input from './Components/Input/Input';
import MainPage from './Modules/MainPage/MainPage';
import WorkCode from './Components/WorkCode/WorkCode';
import { hot } from 'react-hot-loader/root';

const App = ({}) => {
  return (
    <div>
      {/* <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter> */}
      {/* <Layout text='welcome, потом переделать на смену в зависимости от логирования'></Layout> */}
      {/* <WorkCode/> */}
      <Layout errorText='кaфывsdк' text = 'hello there' />

      {/* <MainPage></MainPage> */}
      {/* <LoginPage></LoginPage> */}
    </div>
  );
};

export default hot(App);
