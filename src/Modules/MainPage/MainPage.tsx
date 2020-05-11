import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Table from '../../Components/Table/Table';
import './MainPage.css';

const MainPage = ({}) => {

  const handleLoginOut = () => {

  }

  return (
    <div className='row container-fluid main-page-container'>
      <div className='col-6 table-block'>
        <Table/>
      </div>

      <div className='col-6'>
        <Button onClick={handleLoginOut} variant="light">Logout</Button>
      </div>
    </div>
  );
};

export default MainPage;
