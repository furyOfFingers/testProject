import React from 'react';
import Button from '../../Components/Button/Button';
import s from './Layout.styl';
import LoginPage from '../../Modules/LoginPage/LoginPage';
import NavigationBar from '../Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

interface ILayoutProps {
  /** Текст кнопки. */
  text: string;
}

const Layout = ({ text }: ILayoutProps) => {
  return (
    <div className={s['layout-container']}>
      <div className={s['layout-header']}>
        <span>{text}</span>
        <div>
          <Button text='Signin' onClick={() => {}} />
        </div>
      </div>

      <div className={s['layout-body']}>
        <BrowserRouter >
          <NavigationBar />
        </BrowserRouter >
        {/* <LoginPage></LoginPage> */}
      </div>
    </div>
  );
};

export default Layout;
