import React from 'react';
import LoginPage from './Modules/LoginPage/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import MainPage from './Modules/MainPage/MainPage';

const App = ({}) => {
  return (
    <div>
     {/* <BrowserRouter>
       <Navbar></Navbar>
     </BrowserRouter> */}


     <MainPage></MainPage>
     {/* <LoginPage></LoginPage> */}
    </div>
  );
};

export default App;
