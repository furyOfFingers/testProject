import React, { useState } from 'react';
import Table from '../../Components/Table/Table';
import Button from '../../Components/Button/Button';
import s from './MainPage.styl';

const MainPage = ({}) => {
  const tableHeader = ['#', 'Task name', 'Time of creation'];
  const tableData = [
    {id: 1, name: 'story', timeOfCreation: "20.03.2020"},
    {id: 2, name: 'auto', timeOfCreation: "03.03.2020"},
    {id: 3, name: 'dance', timeOfCreation: "10.04.2020"}
  ];

  const handleLoginOut = () => {};

  return (
    <div className={s['main-page-container']}>
      <div className={s['table-container']}>
        <Table data={tableData} header={tableHeader} />
      </div>

      <div>
        <Button onClick={handleLoginOut} text='Logout' />
      </div>
    </div>
  );
};

export default MainPage;
